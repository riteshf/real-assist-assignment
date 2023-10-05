import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" text-black">
      <hr className="my-2 h-[4px] bg-gradient-to-r from-blue-500 to-cyan-500" />
      <div className="flex justify-between">
        <p className="text-xs text-blue-600 font-black">
          Report Genereted on September 26, 2023
        </p>
        <p className=" text-xs font-black">
          RealAssist Property Report | Page 1{" "}
          <span className="text-gray-600">of 25</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
