"use client";

import { v4 as uuidv4 } from "uuid";
import { RadioGroup, Radio, Label } from "react-aria-components";
import { RadioGroupProps } from "react-aria-components";

type DataType = {
  label: string;
  value: string;
};

interface RadioPillProps extends RadioGroupProps {
  data: DataType[];
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const RadioPill: React.FC<RadioPillProps> = ({
  data,
  value,
  label,
  onChange,
}) => {
  const values = data.map((item) => item.value);
  const labels = data.map((item) => item.label);
  return (
    <>
      <RadioGroup
        className="flex flex-col space-y-2 px-2 py-2"
        value={value}
        onChange={onChange}
      >
        <Label className="text-base text-neutral-700">{label}</Label>
        <div className="px-2 flex flex-row flex-wrap gap-x-2 gap-y-4">
          {values.map((item, index) => (
            <Radio
              className={`
              data-[selected]:bg-teal-600
              data-[selected]:text-neutral-50   
              text-neutral-500
              px-3
              py-2
              cursor-pointer
              transition-all
              duration-150
              text-sm
              border-transparent
              shadow-sm
              rounded-full
              `}
              key={uuidv4()}
              value={item}
            >
              {labels[index]}
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </>
  );
};

export default RadioPill;
