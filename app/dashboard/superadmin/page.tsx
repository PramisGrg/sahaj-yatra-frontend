import MaxWidthContainer from "@/components/layouts/max-width-container";
import React from "react";
import {
  CountCard,
  UnVerfiedUsersCard,
  VerfiedUsersGrid,
} from "./components/dashboard-card";

const Page = () => {
  return (
    <MaxWidthContainer>
      <section className="flex flex-col gap-10">
        <CountCard />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <UnVerfiedUsersCard />
          <VerfiedUsersGrid />
        </div>
      </section>
    </MaxWidthContainer>
  );
};

export default Page;
