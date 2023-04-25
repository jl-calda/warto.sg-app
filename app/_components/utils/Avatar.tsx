"use client";

import { HiUserCircle } from "react-icons/hi2";

import Image from "next/image";

interface AvatarProps {
  src?: string;
  small?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, small }) => {
  if (!src)
    return <HiUserCircle size={30} color="#166534" className="rounded-full" />;
  return (
    <Image
      className="rounded-full"
      src={src || "/images/placeholder.jpg"}
      width={`${small ? 30 : 50}`}
      height={`${small ? 30 : 50}`}
      alt="avatar"
    />
  );
};

export default Avatar;
