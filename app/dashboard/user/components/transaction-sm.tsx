"use client";
import { cn } from "@/lib/utils";
import { useGetTransaction } from "@/services/tanstack-queries/transcation-query";
import React from "react";

interface Transaction {
  _id: string;
  transactionType: "credit" | "debit";
  amount: number;
}

const TransactionSm = () => {
  const { data: transaction } = useGetTransaction();
  const transactionData = transaction?.data || [];

  return (
    <div className="space-y-4">
      <h1 className="font-bold">All past Transaction</h1>
      <div className="space-y-2">
        {transactionData.map((item: Transaction) => (
          <div className="flex justify-between p-2" key={item._id}>
            <h1>Rs {item.amount}</h1>
            <h2
              className={cn(
                item.transactionType === "credit" && "text-green-400",
                item.transactionType === "debit" && "text-red-400"
              )}
            >
              {item.transactionType}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionSm;
