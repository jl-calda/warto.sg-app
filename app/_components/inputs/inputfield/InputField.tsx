"use client";

import { useState } from "react";
import { Text, TextField, Label, Input } from "react-aria-components";
import { TextFieldProps } from "react-aria-components";
import { HiOutlineEyeSlash, HiOutlineEye } from "react-icons/hi2";
import { BiDollar } from "react-icons/bi";

interface InputFieldProps extends TextFieldProps {
  label?: string;
  error?: boolean;
  formatPrice?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  type = "text",
  isDisabled,
  isRequired = true,
  formatPrice,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      isRequired={isRequired}
      isDisabled={isDisabled}
      validationState="invalid"
      className="relative flex flex-col space-y-2 px-2 py-3 w-full"
      type={showPassword ? "text" : type}
      value={value}
      onChange={onChange}
    >
      <Input
        className={`
        ${formatPrice ? "pl-8" : "pl-5"}
        pr-5
        peer
        border
        border-teal-500
        px-5
        pb-1
        pt-7
        rounded-2xl
        text-sm
        focus:outline-none
        focus:ring-2
        focus:ring-offset-1
      focus:ring-teal-500
        focus:border-transparent
        shadow-sm`}
        placeholder=" "
      />
      <Label
        className={`
        text-neutral-500
        origin-[0]
        absolute
        left-4
        transition-all
        duration-300
        transform 
        underline
        -translate-y-0
        bg-white
        text-xs
        px-1
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:no-underline
        peer-focus:scale-100
        peer-focus:-translate-y-5
  `}
      >
        {label}
      </Label>
      {formatPrice && (
        <BiDollar className="absolute bottom-5 left-6" size={15} />
      )}

      {type === "password" && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-3 right-4 p-1 hover:bg-neutral-100 rounded-full cursor-pointer"
        >
          {showPassword ? (
            <HiOutlineEye size={20} />
          ) : (
            <HiOutlineEyeSlash size={20} />
          )}
        </div>
      )}
    </TextField>
  );
};

export default InputField;
