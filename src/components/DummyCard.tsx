import React from "react";
import { Button } from "flowbite-react";
import classnames from "classnames";

type Props = {
  height?: "sm" | "md" | "xl";
};

const DummyCard = ({ height = "md" }: Props) => {
  return (
    <section className="w-full block bg-gray-100 border border-gray-200 rounded-2xl">
      <div
        className={classnames("bg-blue-100 rounded-t-2xl", {
          "h-6": height === "sm",
          "h-8": height === "md",
          "h-10": height === "xl",
        })}
      ></div>
      <div className="m-2.5  bg-white rounded-2xl p-3 relative">
        <div
          role="status"
          className={classnames("animate-pulse", {
            "h-[80px]": height === "sm",
            "h-[100px]": height === "md",
            "h-[120px]": height === "xl",
          })}
        >
          <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <Button className="w-[250px] min-h-[30px] leading-6 text-xl absolute top-[40%] left-[40%] rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
          Only Focus on Crime Graph
        </Button>
      </div>
    </section>
  );
};

export default DummyCard;
