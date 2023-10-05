import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DummyCard from "./DummyCard";
import CrimeCharts from "./CrimeCharts";

type Props = {
  data: Record<string, any>[];
};

const CrimeReport = ({ data = [] }: Props) => {
  return (
    <div className="p-4">
      <Header />
      <div className="flex flex-col gap-2">
        <DummyCard height="md" />
        <DummyCard height="sm" />
        <DummyCard height="xl" />
        <CrimeCharts data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default CrimeReport;
