"use client";

import React from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import async from "react-select/dist/declarations/src/async/index";

const AddressSelect = () => {
  const loadOptions = async (inputValue: string, callback: any) => {
    const response = await fetch(
      `https://developers.onemap.sg/commonapi/search?searchVal=${inputValue}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
    );
    const data = await response.json();
    return data.results;
  };
  //   `https://developers.onemap.sg/commonapi/search?searchVal=${inputValue}&returnGeom=Y&getAddrDetails=Y&pageNum=1`

  return (
    <div className="bg-red-50">
      <AsyncSelect
        placeholder="Search for an address"
        isClearable
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option["ADDRESS"]}</div>
          </div>
        )}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default AddressSelect;
