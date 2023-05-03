"use client";

import roomTypes from "../_constants/roomTypes";
import houseTypes from "../_constants/houseTypes";
import genderTypes from "../_constants/genderTypes";

import Container from "../_components/utils/Container";
import { useCallback, useState } from "react";

import { HouseType } from "../_constants/houseTypes";
import { RoomType } from "../_constants/roomTypes";
import ClientOnly from "../_components/utils/ClientOnly";
import ListClient from "./ListClient";
import RadioPill from "../_components/inputs/radiogroup/RadioPill";
import InputField from "../_components/inputs/inputfield/InputField";

const ListPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [houseType, setHouseType] = useState(houseTypes[0].value);
  const [roomType, setRoomType] = useState(roomTypes[0].value);
  const [genderType, setGenderType] = useState(genderTypes[0].value);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="flex flex-col">
          <div>{`${houseType}:${houseType}`}</div>
          <div>{`${roomType}:${roomType}`}</div>
          <div>{title}</div>
        </div>
        <div className="col-span-3 col-start-3">
          <ClientOnly>
            <InputField
              label="Listing title"
              description="Make your title short and descriptive"
              value={title}
              onChange={setTitle}
              isDisabled={false}
            />
            <InputField
              label="Describe your listing"
              description="Specify the details of your listing"
              value={title}
              onChange={setTitle}
              isDisabled={false}
              errorMessage="Change your password"
            />
            <RadioPill
              data={houseTypes}
              value={houseType}
              onChange={setHouseType}
              label="Type of Building"
            />
            <RadioPill
              data={roomTypes}
              value={roomType}
              onChange={setRoomType}
              label="Room Type"
            />
            <RadioPill
              data={genderTypes}
              value={genderType}
              onChange={setGenderType}
              label="Preferred Gender"
            />
          </ClientOnly>
        </div>
      </div>
    </Container>
  );
};

export default ListPage;
