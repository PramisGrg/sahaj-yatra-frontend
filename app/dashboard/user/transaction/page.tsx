"use client";
import React from "react";
import { TransactionTable } from "../components/transaction-table";
import { transactioncolumns } from "../components/transaction-column";
import { useGetTransaction } from "@/services/tanstack-queries/transcation-query";
import MaxWidthContainer from "@/components/layouts/max-width-container";

const Page = () => {
  const { data: transaction } = useGetTransaction();
  const transactionData = transaction?.data || [];

  return (
    <MaxWidthContainer className="py-10">
      <TransactionTable columns={transactioncolumns} data={transactionData} />
    </MaxWidthContainer>
  );
};

export default Page;
