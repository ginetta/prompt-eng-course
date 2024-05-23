'use client';

import Markdown from 'react-markdown';

import { spinner } from './spinner';

import { IconAI, IconSystem, IconUser } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

// Different types of message bubbles.

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start">
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
        <IconUser />
      </div>
      <div className="ml-4 flex-1 overflow-hidden whitespace-pre-line px-1 pt-1">
        {children}
      </div>
    </div>
  );
}

export function FeedbackMessage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('group relative flex items-start', className)}>
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background text-primary shadow-sm">
        <IconSystem />
      </div>
      <div className="ml-4 flex-1 overflow-hidden whitespace-pre-line px-1 pt-1">
        {children}
      </div>
    </div>
  );
}

export function BotMessage({
  children,
  className,
  loading,
}: {
  children?: string;
  className?: string;
  loading?: boolean;
}) {
  return (
    <div className={cn('group relative flex items-start', className)}>
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm">
        <IconAI />
      </div>
      {/* prettier-ignore */}
      <div className="prose prose-ul:m-0 prose-ol:m-0 prose-li:m-0 prose-p:m-0 dark:prose-invert ml-4 flex-1 overflow-hidden whitespace-pre-line px-1 pt-1 leading-tight">
        {loading ? spinner : <Markdown>{children}</Markdown>}
      </div>
    </div>
  );
}

export function BotCard({
  children,
  showAvatar = true,
}: {
  children: React.ReactNode;
  showAvatar?: boolean;
}) {
  return (
    <div className="group relative flex items-start">
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm',
          !showAvatar && 'invisible'
        )}
      >
        <IconAI />
      </div>
      <div className="ml-4 flex-1 px-1">{children}</div>
    </div>
  );
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'mt-2 flex items-center justify-center gap-2 text-xs text-gray-500'
      }
    >
      <div className={'max-w-[600px] flex-initial px-2 py-2'}>{children}</div>
    </div>
  );
}
