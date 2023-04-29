import React from "react";
import AddressSelect from "../inputs/AddressSelect";
import Container from "../utils/Container";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <Container>
      <AddressSelect />
    </Container>
  );
};

export default SearchBar;
