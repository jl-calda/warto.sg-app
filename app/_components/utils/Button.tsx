"use client";

import { Quicksand } from "next/font/google";
import { IconType } from "react-icons";

const quicksand = Quicksand({ subsets: ["latin"] });

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  icon?: IconType;
  small?: boolean;
  full?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  icon: Icon,
  small,
  full,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      relative 
      disabled:opacity-60 
      disabled:cursor-not-allowed
      transition
      w-full
      border
      border-teal-800
      hover:border-teal-700
    ${full ? "rounded-full" : "rounded-xl"}
    ${quicksand.className} 
    ${outline ? "bg-white" : "bg-teal-800"}
    ${outline ? "hover:bg-stone-50" : "hover:bg-teal-700"}
    ${outline ? "text-stone-800" : "text-white"}
    ${small ? "px-2" : "px-3"}
    ${small ? "py-1" : "py-3"}
    ${small ? "text-sm" : "text-md"}
    ${small ? "font-light" : "font-semibold"}


      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
