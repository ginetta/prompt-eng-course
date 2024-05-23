import 'server-only';

import { createAI, createStreamableUI, getMutableAIState } from 'ai/rsc';
import OpenAI from 'openai';

import { spinner, BotMessage } from '@/components/chat-message';
import { runOpenAICompletion } from '@/lib/utils';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

async function submitUserMessage(
  content: string,
  temperature: number = 1,
  top_p: number = 1,
  frequency_penalty: number = 0,
  presence_penalty: number = 0,
  newRole?: string
) {
  'use server';

  const aiState = getMutableAIState<typeof AI>();
  if (newRole) {
    aiState.update([
      {
        role: 'system',
        content: newRole,
      },
    ]);
  } else {
    aiState.update([
      ...aiState.get(),
      {
        role: 'user',
        content,
      },
    ]);
  }

  const reply = createStreamableUI(
    <BotMessage className="items-center" loading></BotMessage>
  );

  const completion = runOpenAICompletion(openai, {
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      ...aiState.get().map((info: any) => ({
        role: info.role,
        content: info.content,
        name: info.name,
      })),
    ],
    temperature,
    top_p,
    frequency_penalty,
    presence_penalty,
  });

  completion.onTextContent((content: string, isFinal: boolean) => {
    reply.update(<BotMessage>{content}</BotMessage>);
    if (isFinal) {
      reply.done();
      aiState.done([...aiState.get(), { role: 'assistant', content }]);
    }
  });

  return {
    id: Date.now(),
    display: reply.value,
  };
}

// Define necessary types and create the AI.

const initialAIState: {
  role: 'user' | 'assistant' | 'system' | 'function';
  content: string;
  id?: string;
  name?: string;
}[] = [];

const initialUIState: {
  id: number;
  display: React.ReactNode;
}[] = [];

export const AI = createAI({
  actions: {
    submitUserMessage,
  },
  initialUIState,
  initialAIState,
});
