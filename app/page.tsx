'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useUIState, useActions, useAIState } from 'ai/rsc';
import Textarea from 'react-textarea-autosize';

import { type AI } from './action';

import {
  FeedbackMessage,
  UserMessage,
} from '@/components/chat-message/message';
import { ChatScrollAnchor } from '@/lib/hooks/chat-scroll-anchor';
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { IconArrowElbow, IconPlus } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { ChatList } from '@/components/chat-list';
import { EmptyScreen } from '@/components/empty-screen';
import { SliderWithLabel } from '@/components/ui/sliderWithLabel';
import { PromptTextarea } from '@/components/prompt-textarea';
import { cn } from '@/lib/utils';

export default function Page() {
  const [historyChatMessages, setHistoryChatMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();
  const [inputValue, setInputValue] = useState('');
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') {
        if (
          e.target &&
          ['INPUT', 'TEXTAREA'].includes((e.target as any).nodeName)
        ) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (inputRef?.current) {
          inputRef.current.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    const handleRefresh = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, [inputRef]);

  // Default values of the OpenAI API parameters
  const [temperature, setTemperature] = useState(1);
  const [topP, setTopP] = useState(1);
  const [frequencyPenalty, setFrequencyPenalty] = useState(0);
  const [presencePenalty, setPresencePenalty] = useState(0);

  const onSubmitRole = async (e: FormEvent, newPrompt: string) => {
    e.preventDefault();

    const value = newPrompt.trim();

    if (!value) return;
    setHistoryChatMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now(),
        display: (
          <FeedbackMessage
            className={cn(
              currentMessages.length > 0
                ? 'mt-8 border-t border-t-foreground pt-12 text-green-700 dark:text-green-600'
                : 'text-green-700 dark:text-green-600'
            )}
          >
            System message updated
          </FeedbackMessage>
        ),
      },
    ]);
    try {
      // Submit and get response message
      const responseMessage = await submitUserMessage(
        value,
        temperature,
        topP,
        frequencyPenalty,
        presencePenalty,
        newPrompt
      );

      setHistoryChatMessages((currentMessages) => [
        ...currentMessages,
        responseMessage,
      ]);
    } catch (error) {
      // You may want to show a toast or trigger an error state.
      console.error(error);
    }
  };

  return (
    <>
      <aside className="sticky top-14 z-10 flex h-[calc(100vh-56px)] shrink-0 flex-col gap-10 overflow-auto bg-background p-8">
        <PromptTextarea onSubmit={onSubmitRole} />
        <div className="flex flex-col gap-10 border-t pt-12 ">
          <SliderWithLabel
            label="Temperature"
            tooltip="Lower temperatures yield more predictable outputs, higher temperatures foster creativity by giving less probable tokens a chance."
            min={0}
            max={2}
            step={0.01}
            value={[temperature]}
            defaultValue={[temperature]}
            onValueChange={(e) => {
              setTemperature(e[0]);
            }}
          />

          <SliderWithLabel
            label="Top P"
            tooltip="Utilizes another technique to control output determinism; lower values for precise answers, higher values for creative diversity (adjust either temperature or Top P, not both, to fine-tune response characteristics)"
            min={0}
            max={1}
            step={0.01}
            value={[topP]}
            defaultValue={[topP]}
            onValueChange={(e) => {
              setTopP(e[0]);
            }}
          />

          <SliderWithLabel
            label="Frequency penalty"
            tooltip="Reduces word repetition by increasing penalties on tokens as they recur within the text."
            min={0}
            max={2}
            step={0.01}
            value={[frequencyPenalty]}
            defaultValue={[frequencyPenalty]}
            onValueChange={(e) => {
              setFrequencyPenalty(e[0]);
            }}
          />

          <SliderWithLabel
            label="Presence penalty"
            tooltip="Applies a uniform penalty to repeated tokens, discouraging phrase repetition and enhancing text diversity."
            min={0}
            max={2}
            step={0.01}
            value={[presencePenalty]}
            defaultValue={[presencePenalty]}
            onValueChange={(e) => {
              setPresencePenalty(e[0]);
            }}
          />
        </div>
      </aside>
      <section className="mx-auto flex w-full max-w-screen-lg flex-col content-between pt-4 md:pt-10">
        {historyChatMessages.length ? (
          <>
            <ChatList messages={historyChatMessages} />
          </>
        ) : (
          <EmptyScreen />
        )}
        <ChatScrollAnchor trackVisibility={true} />
        {/* prettier-ignore */}
        <div className="sticky bottom-0 w-full from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px] dark:from-background/10 dark:from-10% dark:to-background/80">
          <div className="mx-4  sm:px-4">
            <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
              <form
                ref={formRef}
                onSubmit={async (e: any) => {
                  e.preventDefault();

                  // Blur focus on mobile
                  if (window.innerWidth < 600) {
                    e.target['message']?.blur();
                  }

                  const value = inputValue.trim();
                  setInputValue('');
                  if (!value) return;

                  // Add user message UI
                  setHistoryChatMessages((currentMessages) => [
                    ...currentMessages,
                    {
                      id: Date.now(),
                      display: <UserMessage>{value}</UserMessage>,
                    },
                  ]);

                  try {
                    // Submit and get response message
                    const responseMessage = await submitUserMessage(
                      value,
                      temperature,
                      topP,
                      frequencyPenalty,
                      presencePenalty
                    );

                    setHistoryChatMessages((currentMessages) => [
                      ...currentMessages,
                      responseMessage,
                    ]);
                  } catch (error) {
                    // You may want to show a toast or trigger an error state.
                    console.error(error);
                  }
                }}
              >
                <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background pr-8 sm:rounded-md sm:border sm:pr-12">
                  <Textarea
                    ref={inputRef}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    placeholder="Send a message."
                    className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    name="message"
                    rows={1}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div className="absolute right-0 top-4 sm:right-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="submit"
                          size="icon"
                          disabled={inputValue === ''}
                        >
                          <IconArrowElbow />
                          <span className="sr-only">Send message</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Send message</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
