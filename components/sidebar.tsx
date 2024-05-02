import { ComponentProps, FC } from 'react';

import { Button } from './ui/button';
import { SliderWithLabel } from './ui/sliderWithLabel';

import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

export const Sidebar: FC<ComponentProps<'aside'>> = ({ className }) => {
  return (
    <aside className={cn('space-y-10', className)}>
      <div className="flex flex-col space-y-8">
        <SliderWithLabel label="Temperature" max={100} step={1} />
        <SliderWithLabel label="Top P" max={100} step={1} />
        <SliderWithLabel label="Frequency penalty" max={100} step={1} />
        <SliderWithLabel label="Presence penalty" max={100} step={1} />
      </div>

      <form className="flex flex-col space-y-4">
        <Textarea placeholder="Type your message here." />
        <Button type="submit">Send</Button>
      </form>
    </aside>
  );
};
