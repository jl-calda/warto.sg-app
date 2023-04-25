"use client";

import { Quicksand } from "next/font/google";
import { useRouter } from "next/navigation";

import { MdMeetingRoom } from "react-icons/md";

const quicksand = Quicksand({ subsets: ["latin"] });

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex flex-row items-center cursor-pointer"
    >
      <MdMeetingRoom color="#166534" size={45} />

      <div
        className={`text-3xl text-stone-700 font-bold ${quicksand.className}`}
      >
        warto
      </div>
    </div>
  );
};

export default Logo;
