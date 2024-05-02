import { FC, useState } from 'react';
import { SliderProps } from '@radix-ui/react-slider';

import { Slider } from './slider';

type SliderWithLabelProps = {
  label: string;
} & SliderProps;

export const SliderWithLabel: FC<SliderWithLabelProps> = ({
  label,
  ...props
}) => {
  const [value, setValue] = useState(50);

  return (
    <div className="flex h-full w-[300px] flex-col items-start justify-center space-y-4 bg-muted/50 dark:bg-background">
      <div className="flex w-full justify-between">
        <h3 className="text-lg text-gray-400">{label}</h3>
        <h4>{value}</h4>
      </div>
      <Slider
        defaultValue={[value]}
        max={100}
        step={1}
        onValueChange={(e) => {
          setValue(e[0]);
        }}
        {...props}
      />
    </div>
  );
};
