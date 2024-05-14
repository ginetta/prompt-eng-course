import { FC, useState } from 'react';
import { SliderProps } from '@radix-ui/react-slider';

import { Slider } from './slider';
import { IconInfo } from './icons';
import { Button } from './button';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type SliderWithLabelProps = {
  label: string;
  tooltip?: string;
} & SliderProps;

export const SliderWithLabel: FC<SliderWithLabelProps> = ({
  label,
  tooltip,
  ...props
}) => {
  return (
    <div className="flex h-full w-[300px] flex-col items-start justify-center space-y-4">
      <div className="flex w-full justify-between">
        <label className="inline-flex text-lg text-gray-400">
          {label}
          {tooltip && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="px-2 py-1.5">
                  <IconInfo />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs" side="right">
                {tooltip}
              </TooltipContent>
            </Tooltip>
          )}
        </label>
        <h4>{props.value}</h4>
      </div>
      <Slider {...props} />
    </div>
  );
};
