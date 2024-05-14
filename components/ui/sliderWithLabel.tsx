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
  return (
    <div className="flex h-full w-[300px] flex-col items-start justify-center space-y-4">
      <div className="flex w-full justify-between">
        <label className="text-lg text-gray-400">{label}</label>
        <h4>{props.value}</h4>
      </div>
      <Slider {...props} />
    </div>
  );
};
