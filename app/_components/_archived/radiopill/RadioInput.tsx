"use client";

import React, { useState } from "react";
import { DataItem } from "./RadioPill";
import Pill from "./Pill";

interface RadioInputProps {
  name: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({
  name,
  onChange,
  disabled,
}) => {
  return (
    <input
      disabled={disabled}
      data-label={"Others"}
      onChange={onChange}
      name={name}
      placeholder="Enter here"
      className="px-3 py-[7px] border placeholder:text-xs rounded-full text-xs bg-neutral-50 focus:outline-none focus:border-teal-700"
      type="text"
    />
  );
};

export default RadioInput;
