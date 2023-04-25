"use client";

import Container from "../utils/Container";
import ActionButtons from "./ActionButtons";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./SearchBar";
import Usermenu from "./Usermenu";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row spacing-x-4 items-center justify-between">
            <Logo />
            <Categories />
            <Usermenu />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
