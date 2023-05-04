"use client";

import React from "react";
import AsyncSelect from "react-select/async";

interface AddressSelectProps {
  value: any;
  onChange: (value: any) => void;
}

const AddressSelect: React.FC<AddressSelectProps> = ({ value, onChange }) => {
  const loadOptions = async (inputValue: string, callback: any) => {
    const response = await fetch(
      `https://developers.onemap.sg/commonapi/search?searchVal=${inputValue}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
    );
    const data = await response.json();
    return data.results;
  };

  return (
    <div className="px-2">
      <AsyncSelect
        unstyled
        value={value}
        onChange={onChange}
        placeholder="Search for an address"
        isClearable
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div className="text-base">{option["ADDRESS"]}</div>
          </div>
        )}
        loadOptions={loadOptions}
        classNames={{
          container: () => "bg-white important:bg-white",
          control: ({ isFocused, isDisabled }) =>
            `rounded-2xl
            px-5
            pt-4
            pb-2
            border
            border-teal-500 
            text-sm
            bg-white
            ${isFocused ? "border-teal-500" : "border-teal-500"}`,
          valueContainer: () =>
            "bg-white peer text-xs text-neutral-500 underline",
          placeholder: ({ isFocused }) =>
            `text-xs text-neutral-500 underline-none text-black`,
          input: () => "peer text-neutral-700 text-xs",
          menu: () => "bg-white px-5 py-2 rounded-2xl shadow-lg",
          menuList: () => "space-y-2",
          singleValue: () => "text-sm text-neutral-500 underline-none",
          option: ({ isFocused, isSelected }) => `
          ${
            isFocused
              ? "bg-teal-500 text-neutral-50"
              : "bg-white text-neutral-700"
          }
          rounded-md
          py-2 px-3
          `,
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default AddressSelect;
