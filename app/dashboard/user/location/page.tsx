"use client";
import MaxWidthContainer from "@/components/layouts/max-width-container";
import React from "react";
import dynamic from "next/dynamic";

const CustomMapContainer = dynamic(
  () => import("../components/map-container"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <MaxWidthContainer>
      <CustomMapContainer />
    </MaxWidthContainer>
  );
};

export default Page;
