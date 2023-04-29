"use client";

import RadioPill from "../_components/inputs/radiopill/RadioPill";
import roomTypes from "../_constants/roomTypes";
import houseTypes from "../_constants/houseTypes";
import genderTypes from "../_constants/genderTypes";

import Container from "../_components/utils/Container";
import { useCallback, useState } from "react";

import { HouseType } from "../_constants/houseTypes";
import { RoomType } from "../_constants/roomTypes";
import ClientOnly from "../_components/utils/ClientOnly";

const ListPage = () => {
  const [houseType, setHouseType] = useState<HouseType>(houseTypes[0]);
  const [roomType, setRoomType] = useState<RoomType>(roomTypes[0]);
  const [genderType, setGenderType] = useState<RoomType>(genderTypes[0]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "houseType") {
      setHouseType({
        label: e.target.dataset.label || "",
        value: e.target.value,
      });
      return;
    } else if (e.target.name === "roomType") {
      setRoomType({
        label: e.target.dataset.label || "",
        value: e.target.value,
      });
      return;
    } else if (e.target.name === "genderType") {
      setGenderType({
        label: e.target.dataset.label || "",
        value: e.target.value,
      });
      return;
    }
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="flex flex-col">
          <div>{`${houseType?.label}:${houseType?.value}`}</div>
          <div>{`${roomType?.label}:${roomType?.value}`}</div>
        </div>
        <div className="col-span-3 col-start-3">
          <div className="flex flex-col">
            <ClientOnly>
              <RadioPill
                title="Category"
                data={houseTypes}
                name="houseType"
                value={houseType}
                onChange={handleChange}
                others
              />
              <hr />
              <RadioPill
                title="Room Type"
                data={roomTypes}
                name="roomType"
                value={roomType}
                onChange={handleChange}
                others
              />
              <RadioPill
                title="Preferred Gender"
                data={genderTypes}
                name="genderType"
                value={genderType}
                onChange={handleChange}
              />
            </ClientOnly>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListPage;
