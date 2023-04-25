"use client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { HiOutlineEyeSlash, HiOutlineEye } from "react-icons/hi2";
import React, { useState } from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  isPassword?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  isPassword,
  formatPrice,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`
          peer
          w-full
          px-6
          pt-6
          pb-2
          font-light
          bg-white
          border
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${isPassword ? "pr-10" : "pr-4"}
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-teal-800"}
          `}
      />
      <label
        htmlFor={id}
        className={`
          absolute 
          underline
          text-xs 
          duration-150 
          transform 
          -translate-y-3
          top-5
          z-10
          origin-[0]
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-80
          peer-focus:-translate-y-4
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
      {isPassword && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-5 right-4 p-1 hover:bg-neutral-100 rounded-full cursor-pointer"
        >
          {showPassword ? (
            <HiOutlineEye size={20} />
          ) : (
            <HiOutlineEyeSlash size={20} />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
