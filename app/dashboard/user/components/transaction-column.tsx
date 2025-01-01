"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Transaction = {
  _id: string;
  amount: number;
  transactionType: "credit" | "debit";
  remarks: string;
  transactionDate: string;
};

export const transactioncolumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "transactionDate",
    header: "Transaction Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "transactionType",
    header: "Transaction Type",
    cell: ({ row }) => {
      const transactionType = row.original.transactionType;
      const color =
        transactionType === "credit" ? "text-green-500" : "text-red-500";
      return <span className={color}>{transactionType}</span>;
    },
  },
  {
    accessorKey: "remarks",
    header: "Remarks",
  },
];
