import { FC, useState } from "react";
import { Slider } from "./slider";
import { SliderProps } from "@radix-ui/react-slider";

type SliderWithLabelProps = {
  label: string;
} & SliderProps;

export const SliderWithLabel: FC<SliderWithLabelProps> = ({
  label,
  ...props
}) => {
  const [value, setValue] = useState(50);

  return (
    <div className="w-[300px] flex flex-col items-start justify-center h-full bg-muted/50 dark:bg-background space-y-4">
      <div className="flex justify-between w-full">
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
