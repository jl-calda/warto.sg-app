"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import {
  HiBars3,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineSquare3Stack3D,
  HiPower,
  HiOutlineBell,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineArrowUpOnSquare,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { signOut } from "next-auth/react";

import useRegisterModal from "@/app/_hooks/useRegisterModal";

import Avatar from "../utils/Avatar";
import Button from "../utils/Button";
import MenuItem from "./MenuItem";
import useLoginModal from "@/app/_hooks/useLoginModal";

interface UserMenuProps {
  currentUser?: any;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row space-x-2 items-center">
        <div className="hidden lg:block">
          <Button label="Post a room" onClick={() => {}} />
        </div>
        <div
          onClick={toggleOpen}
          className="flex flex-row px-3 py-[9px] space-x-2 items-center cursor-pointer border rounded-xl"
        >
          <HiBars3 size={25} />
          <Avatar src={currentUser?.image} small />
        </div>
      </div>
      {isOpen && !currentUser && (
        <div className="absolute right-0 top-16 px-4 py-3 shadow-md rounded-2xl bg-white flex flex-col space-y-2 items-center min-w-[200px]">
          <MenuItem
            label="Register"
            onClick={registerModal.onOpen}
            icon={HiOutlinePencilSquare}
          />
          <hr className="w-full" />
          <MenuItem label="Log in" onClick={loginModal.onOpen} icon={HiPower} />
        </div>
      )}
      {isOpen && currentUser && (
        <div className="absolute right-0 top-16 px-4 py-3 shadow-md rounded-2xl bg-white flex flex-col space-y-2 items-center min-w-[200px]">
          <MenuItem
            label="Profile"
            onClick={() => router.push("/profile")}
            icon={HiOutlineUser}
          />
          <MenuItem
            label="Rooms"
            onClick={() => router.push("/rooms")}
            icon={HiOutlineSquare3Stack3D}
          />
          <MenuItem
            label="Favorites"
            onClick={() => router.push("/favorites")}
            icon={HiOutlineHeart}
          />
          <MenuItem
            label="Messages"
            onClick={() => {}}
            icon={HiOutlineChatBubbleBottomCenterText}
          />
          <MenuItem
            label="Notifications"
            onClick={() => {}}
            icon={HiOutlineBell}
          />
          <hr className="w-full" />
          <MenuItem
            label="Post a room"
            onClick={() => router.push("/favorites")}
            icon={HiOutlineArrowUpOnSquare}
            color
          />
          <hr className="w-full" />
          <MenuItem label="Sign out" onClick={() => signOut()} icon={HiPower} />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
