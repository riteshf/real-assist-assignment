"use client";
import { useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import { Spinner } from "flowbite-react";
import PrintButton from "@/components/PrintButton";
import CrimeReport from "@/components/CrimeReport";
import { CRIME_API_ENDPOINT, CRIME_API_KEY } from "@/config/env.config";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Record<string, any>[]>([]);
  const { toPDF, targetRef } = usePDF({ filename: "crime-report.pdf" });

  const getCrimeReport = async () => {
    try {
      setLoading(true);
      const dynamicData = await fetch(
        `${CRIME_API_ENDPOINT}?from=2015&to=2020&API_KEY=${CRIME_API_KEY}`
      );
      const data = await dynamicData.json();
      setData(data.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCrimeReport();
  }, []);

  if (error || loading)
    return (
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      </div>
    );
  return (
    <div className="container mx-auto">
      <div className="flex">
        <PrintButton handleClick={toPDF} />
      </div>
      <div className="hide">
        <div ref={targetRef}>
          <CrimeReport data={data} />
        </div>
      </div>
    </div>
  );
}
