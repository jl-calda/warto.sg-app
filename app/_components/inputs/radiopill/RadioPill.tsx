"use client";

import { v4 as uuid } from "uuid";
import Pill from "./Pill";
import RadioInput from "./RadioInput";
import { useState } from "react";

export interface DataItem {
  label: string;
  value: string;
}

interface RadioPillProps {
  data: DataItem[];
  name: string;
  title: string;
  value: DataItem;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  others?: boolean;
  defaultIndex?: number;
}
const RadioPill: React.FC<RadioPillProps> = ({
  title,
  data,
  name,
  others,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2 mt-4 pb-4">
      <p className="text-sm font-semibold">{title}</p>
      <div className="flex flex-col space-y-4">
        <div className="px-2 flex flex-row flex-wrap gap-x-2 gap-y-4">
          {data.map((item) => (
            <Pill
              key={uuid()}
              id={`${name}_${item.value}`}
              name={name}
              label={item.label}
              value={item}
              onChange={onChange}
              selected={value.label === item.label}
            />
          ))}
        </div>
        {others && (
          <div className="flex flex-row px-2 space-x-2">
            <Pill
              key={uuid()}
              id={`${name}_Others`}
              name={name}
              label={"Others"}
              value={{ label: "Others", value: "Others" }}
              onChange={onChange}
              selected={value.label === "Others"}
            />
            {value.label === "Others" && (
              <RadioInput
                disabled={value.label !== "Others"}
                name={name}
                onChange={onChange}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioPill;
