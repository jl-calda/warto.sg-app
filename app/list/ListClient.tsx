"use client";

import houseTypes from "../_constants/houseTypes";

import RadioPill from "../_components/inputs/radiogroup/RadioPill";
import { useState } from "react";
import ClientOnly from "../_components/utils/ClientOnly";

type Props = {};

const ListClient = (props: Props) => {
  const [houseType, setHouseType] = useState(houseTypes[0].value);
  return (
    <div>
      <ClientOnly>
        <RadioPill
          value={houseType}
          onChange={setHouseType}
          data={houseTypes}
          label="Choose housetype"
        />
      </ClientOnly>
    </div>
  );
};

export default ListClient;
