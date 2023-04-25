"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import queryString from "query-string";
import { IconType } from "react-icons";

interface MenuItemProps {
  label: string;
  value?: string;
  selected?: boolean;
  onClick?: () => void;
  icon?: IconType;
  color?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  value,
  selected,
  onClick,
  icon: Icon,
  color,
}) => {
  const params = useSearchParams();
  const router = useRouter();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: value,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  }, []);
  return (
    <>
      <div
        className={`
        flex
        flex-row
        items-center
        space-x-2
        relative
        w-full
        px-2
        py-2
        transition 
        text-xs 
        cursor-pointer 
        rounded-lg
        ${selected ? "bg-stone-50 rounded-md text-stone-500 font-semibold" : ""}
        ${color ? "bg-teal-800" : "bg-white"}
        ${color ? "text-white font-semibold" : "text-stone-800"}
        ${color ? "hover:bg-teal-700" : "hover:bg-stone-50"}

        `}
        onClick={onClick ? onClick : handleClick}
      >
        {Icon && <Icon size={24} color={`${color ? "white" : "#166534"}`} />}
        <p>{label}</p>
      </div>
    </>
  );
};

export default MenuItem;
