import MaxWidthContainer from "@/components/layouts/max-width-container";
import React from "react";
import { Charts } from "./components/charts";
import Payment from "./components/payment";
import TransactionSm from "./components/transaction-sm";

const Page = () => {
  return (
    <MaxWidthContainer className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10">
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="border p-4 rounded-md space-y-2">
            <h1 className="text-sm text-gray-500">Total credit amount: </h1>
            <p className="font-bold">Rs 400</p>
            <Charts />
          </div>
          <div className="border p-4 rounded-md space-y-2">
            <h1 className="text-sm text-gray-500">Total debit amount: </h1>
            <p className="font-bold">Rs 400</p>
            <Charts />
          </div>
        </div>
        <div className="p-4 border rounded-md">
          <Payment />
        </div>
      </div>
      <div className="border p-4 rounded-md">
        <TransactionSm />
      </div>
    </MaxWidthContainer>
  );
};

export default Page;
