"use client";

import houseTypes from "../_constants/houseTypes";
import roomTypes from "../_constants/roomTypes";
import genderTypes from "../_constants/genderTypes";

import RadioPill from "../_components/inputs/radiogroup/RadioPill";
import { useState } from "react";
import ClientOnly from "../_components/utils/ClientOnly";
import { useForm } from "react-hook-form";
import InputField from "../_components/inputs/inputfield/InputField";
import AddressSelect from "../_components/inputs/addressSelect/AddressSelect";
import AsyncSelect from "../_components/inputs/addressSelect/AsyncSelect";

type Props = {};

const ListClient = (props: Props) => {
  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      houseType: houseTypes[0].value,
      roomType: roomTypes[0].value,
      genderType: genderTypes[0].value,
      title: "",
      description: "",
      price: "0",
      address: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  const houseType = watch("houseType");
  const roomType = watch("roomType");
  const genderType = watch("genderType");
  const title = watch("title");
  const description = watch("description");
  const price = watch("price");
  const address = watch("address");

  const setCustonValue = (id: any, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <div>
      <ClientOnly>
        <InputField
          label="Title of your listing"
          value={title}
          onChange={(value) => setCustonValue("title", value)}
          isDisabled={false}
        />
        <InputField
          label="Description of your listing"
          value={description}
          onChange={(value) => setCustonValue("description", value)}
          isDisabled={false}
        />
        <AddressSelect
          value={address}
          onChange={(value) => setCustonValue("address", value)}
        />
        <AsyncSelect
          value={address}
          onChange={(value) => setCustonValue("address", value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <InputField
            type="number"
            label="Price of your Listing"
            value={price}
            onChange={(value) => setCustonValue("price", value)}
            isDisabled={false}
            formatPrice
          />
        </div>
        <div className="grid grid-cols-2">
          <RadioPill
            value={houseType}
            onChange={(value) => setCustonValue("houseType", value)}
            data={houseTypes}
            label="Choose housetype"
          />
          <RadioPill
            data={roomTypes}
            value={roomType}
            onChange={(value) => setCustonValue("roomType", value)}
            label="Room Type"
          />
          <RadioPill
            data={genderTypes}
            value={genderType}
            onChange={(value) => setCustonValue("genderType", value)}
            label="Preferred Gender"
          />
        </div>
      </ClientOnly>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
};

export default ListClient;
