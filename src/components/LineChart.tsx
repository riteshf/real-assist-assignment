"use client";
import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

import { Spinner } from "flowbite-react";

type Props = {
  label: string;
  data: Record<string, any>[];
};

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = ({ label, data }: Props) => {
  const yAxisData = data.map((entry) => entry.data_year);
  const rowData = data.map((entry) => entry[label] || 0);

  const series = [
    {
      name: label,
      data: rowData,
    },
  ];
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    xaxis: {
      categories: yAxisData,
    },
    yaxis: {
      title: {
        text: "Arrests",
      },
    },
  };

  return (
    <section className="w-full block bg-gray-100 border border-gray-200 rounded-2xl">
      <div className="h-8 bg-blue-100 text-blue-600 text-sm rounded-t-2xl flex align-center px-4 my-auto">
        {label}
      </div>
      <div className="m-2.5 bg-white rounded-2xl p-2">
        <Chart
          series={series}
          options={options}
          type="line"
          width={"100%"}
          height={320}
        />
      </div>
    </section>
  );
};

export default LineChart;
