'use client';

import { useEffect, useRef, useState } from 'react';
import { useUIState, useActions } from 'ai/rsc';
import Textarea from 'react-textarea-autosize';
import { Label } from '@radix-ui/react-label';

import { type AI } from './action';

import { UserMessage } from '@/components/llm-stocks/message';
import { ChatScrollAnchor } from '@/lib/hooks/chat-scroll-anchor';
// import { FooterText } from '@/components/footer';
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

export default function Page() {
  const [messages, setMessages] = useUIState<typeof AI>();
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

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputRef]);

  return (
    <>
      <aside className="sticky top-14 flex h-[calc(100vh-56px)] shrink-0 flex-col space-y-10 overflow-auto bg-background p-8">
        <form
          className="flex flex-col space-y-4"
          onSubmit={async (e: any) => {
            e.preventDefault();
          }}
        >
          <Label className="text-lg font-normal text-gray-400">
            System Message
          </Label>
          <Textarea placeholder="Type your message here." minRows={6} />
          <Button type="submit">Send</Button>
        </form>
        <div className="flex flex-col space-y-8 border-t pt-12 ">
          <SliderWithLabel label="Temperature" max={100} step={1} />
          <SliderWithLabel label="Top P" max={100} step={1} />
          <SliderWithLabel label="Frequency penalty" max={100} step={1} />
          <SliderWithLabel label="Presence penalty" max={100} step={1} />
        </div>
      </aside>
      <section className="mx-auto flex w-full max-w-screen-lg flex-col content-between pt-4 md:pt-10">
        {messages.length ? (
          <>
            <ChatList messages={messages} />
          </>
        ) : (
          <EmptyScreen />
        )}
        <ChatScrollAnchor trackVisibility={true} />
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
                  setMessages((currentMessages) => [
                    ...currentMessages,
                    {
                      id: Date.now(),
                      display: <UserMessage>{value}</UserMessage>,
                    },
                  ]);

                  try {
                    // Submit and get response message
                    const responseMessage = await submitUserMessage(value);
                    setMessages((currentMessages) => [
                      ...currentMessages,
                      responseMessage,
                    ]);
                  } catch (error) {
                    // You may want to show a toast or trigger an error state.
                    console.error(error);
                  }
                }}
              >
                <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.reload();
                        }}
                      >
                        <IconPlus />
                        <span className="sr-only">New Chat</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>New Chat</TooltipContent>
                  </Tooltip>
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
              {/* <FooterText className="hidden sm:block" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
