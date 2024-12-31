"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Verified = {
  _id: string;
  username: string;
  email: string;
  phoneNumber: string;
  amount: number;
  rfidNumber: string;
};

export const verifiedcolumns: ColumnDef<Verified>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone number",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "rfidNumber",
    header: "RF Id",
  },
];
