import MaxWidthContainer from "@/components/layouts/max-width-container";
import React from "react";
import { BusChart, Component } from "./components/dashboard-charts";

const Page = () => {
  return (
    <MaxWidthContainer className="space-y-10">
      <BusChart />
      <Component />
    </MaxWidthContainer>
  );
};

export default Page;
