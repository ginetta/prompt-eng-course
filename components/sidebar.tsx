import { ComponentProps, FC, useState } from 'react';

import { Button } from './ui/button';
import { SliderWithLabel } from './ui/sliderWithLabel';
import { Label } from './ui/label';

import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

export const Sidebar: FC<ComponentProps<'aside'>> = ({ className }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <aside className={cn('space-y-12', className)}>
      <div className="space-y-6">
        <h2 className="text-lg font-bold">Parameters</h2>
        <div className="flex flex-col space-y-8">
          <SliderWithLabel label="Temperature" max={100} step={1} />
          <SliderWithLabel label="Top P" max={100} step={1} />
          <SliderWithLabel label="Frequency penalty" max={100} step={1} />
          <SliderWithLabel label="Presence penalty" max={100} step={1} />
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-lg font-bold">Assistant Role</h2>
        <form className="flex flex-col space-y-4">
          <Textarea
            placeholder="Define your new assistant role."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </aside>
  );
};
