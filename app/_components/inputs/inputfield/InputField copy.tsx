"use client";

import { useState } from "react";
import { Text, TextField, Label, Input } from "react-aria-components";
import { TextFieldProps } from "react-aria-components";
import { HiOutlineEyeSlash, HiOutlineEye } from "react-icons/hi2";

interface InputFieldProps extends TextFieldProps {
  label?: string;
  errorMessage?: string;
  description?: string;
  error?: boolean;
  ref: any;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  type = "text",
  isDisabled,
  errorMessage,
  description,
  isRequired = true,
  ref,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      ref={ref}
      isRequired={isRequired}
      isDisabled={isDisabled}
      validationState="invalid"
      className="relative flex flex-col space-y-2 px-2 pt-2 pb-6 w-full"
      type={showPassword ? "text" : type}
      value={value}
      onChange={onChange}
    >
      <Input
        className="
        peer
        border
        border-teal-500
        px-3
        pb-1
        pt-6
        rounded-md
        text-sm
        focus:outline-none
        focus:ring-2
        focus:ring-offset-1
      focus:ring-teal-500
        focus:border-transparent
        shadow-sm"
        placeholder=" "
      />
      <Label
        className="
        text-neutral-500
        absolute
        transition-all
        duration-300
        bg-white
        text-xs
        left-4
        peer-focus:underline
        "
      >
        {label}
      </Label>
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
      <Text
        className="absolute bottom-0 peer-focus:text-xs peer-focus:block text-neutral-500 text-xs hidden"
        slot="description"
      >
        {description}
      </Text>

      <Text
        className="text-red-500 absolute bottom-0 right-2 text-xs hidden"
        slot="errorMessage"
      >
        {errorMessage}
      </Text>
    </TextField>
  );
};

export default InputField;
