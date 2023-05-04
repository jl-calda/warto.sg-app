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
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="flex flex-col"></div>
        <div className="col-span-3 col-start-3">
          <p className="text-text-primary font-bold">Post your Room</p>
          <ClientOnly>
            <ListClient />
          </ClientOnly>
        </div>
      </div>
    </Container>
  );
};

export default ListPage;
