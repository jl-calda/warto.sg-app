"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "./MenuItem";

import categories from "@/app/_constants/roomTypes";

const CategoryList = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  return (
    <ul className="hidden md:grid gap-1 grid-cols-4">
      {categories.map((item) => (
        <li key={uuidv4()}>
          <MenuItem
            label={item.label}
            value={item.value}
            selected={category === item.value}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
