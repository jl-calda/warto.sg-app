"use client";

import Container from "../utils/Container";
import ActionButtons from "./ActionButtons";
import CategoryList from "./Categories";
import Logo from "./Logo";
import Search from "./SearchBar";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: any;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row spacing-x-4 items-center justify-between">
            <Logo />
            <CategoryList />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
