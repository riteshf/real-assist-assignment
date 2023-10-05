import Image from "next/image";
import React from "react";
import LineChart from "./LineChart";

type Props = {
  data: Record<string, any>[];
};

const CrimeCharts = ({ data = [] }: Props) => {
  return (
    <div className="flex flex-col my-2 gap-4">
      <div className="flex gap-2 text-black  my-auto">
        <Image src="/location.svg" width="16" height="16" alt="location" />
        <p className="text-sm justify-center my-auto font-medium">Crime</p>
        <hr className="w-full h-[4px] justify-center m-auto bg-gradient-to-r from-blue-500 to-cyan-500" />
      </div>
      <LineChart label="Burglary" data={data} />
      <LineChart label="Robbery" data={data} />
    </div>
  );
};

export default CrimeCharts;
