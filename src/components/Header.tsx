import { Footer } from "flowbite-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className=" text-black">
      <div className="flex justify-between">
        <Image src="/large-logo.svg" width="92" height="16" alt="brand-name" />
        <p className=" text-xs font-black">
          123 Main Street, Dover, NH 03820-4667
        </p>
      </div>
      <hr className="my-2 h-[4px] bg-gradient-to-r from-blue-500 to-cyan-500" />
    </div>
  );
};

export default Header;
