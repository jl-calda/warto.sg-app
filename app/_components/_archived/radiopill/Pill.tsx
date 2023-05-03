"use client";

import { DataItem } from "./RadioPill";

interface PillProps {
  label: string;
  value: DataItem;
  name: string;
  selected: boolean;
  others?: boolean;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Pill: React.FC<PillProps> = ({
  label,
  selected,
  value,
  name,
  id,
  onChange,
}) => {
  return (
    <>
      <label
        data-label={label}
        id={value.value}
        htmlFor={id}
        className={`
        ${selected ? "bg-neutral-100" : "bg-white"} 
        px-3 py-2 text-xs border rounded-full cursor-pointer
        transition
        duration-150
        `}
      >
        {label}
        <input
          data-label={label}
          id={id}
          onChange={onChange}
          value={value.value}
          name={name}
          checked={selected}
          type="radio"
          className="hidden"
        />
      </label>
    </>
  );
};

export default Pill;
