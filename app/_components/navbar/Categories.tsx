"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "./MenuItem";

export const categories = [
  {
    label: "Common Room",
    value: "common-room",
  },
  {
    label: "Masters Bedroom",
    value: "masters-bedroom",
  },
  {
    label: "Sharing Room",
    value: "sharing-room",
  },
  {
    label: "Solo Room",
    value: "solo-room",
  },
  {
    label: "Study Room",
    value: "study-room",
  },
  {
    label: "Entire Unit",
    value: "entire-unit",
  },
  {
    label: "HDB Flat",
    value: "hdb-flat",
  },
  {
    label: "Condominium",
    value: "condominium",
  },
];

const Categories = () => {
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

export default Categories;
