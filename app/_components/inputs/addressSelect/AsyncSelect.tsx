"use client";

import {
  Button,
  Item,
  Label,
  ListBox,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import InputField from "../inputfield/InputField";
import { useState } from "react";
import { useAsyncList } from "react-stately";

type Props = {};

const AsyncSelect = (props: Props) => {
  const [value, setValue] = useState("");

  let list = useAsyncList({
    async load({ value, filterText }) {
      const response = await fetch(
        `https://developers.onemap.sg/commonapi/search?searchVal=${value}&returnGeom=Y&getAddrDetails=Y&pageNum=1`,
        { signal }
      );
      const data = await response.json();

      return data.results;
    },
  });

  // const resolvedOptions = Promise.all(options);
  return (
    <>
      <Select>
        <InputField
          type="text"
          value={value}
          label={"Where is your place located?"}
          onChange={setValue}
        />
        <Button>
          <SelectValue />
          <span aria-hidden="true">▼</span>
        </Button>
        <Popover>
          <ListBox items={list}>
            {(item) => <Item>{item["ADDRESS"]}</Item>}
          </ListBox>
        </Popover>
      </Select>
    </>
  );
};

export default AsyncSelect;
