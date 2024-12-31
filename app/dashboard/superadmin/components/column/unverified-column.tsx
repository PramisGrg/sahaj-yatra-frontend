"use client";
import { ColumnDef } from "@tanstack/react-table";
import AddRfId from "../add-rfid";

export type Unverified = {
  _id: string;
  username: string;
  email: string;
  phoneNumber: string;
  citizenshipNumber: string;
};

export const unverifiedcolumns: ColumnDef<Unverified>[] = [
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
    accessorKey: "citizenshipNumber",
    header: "Citizenship Numbner",
  },
  {
    accessorKey: "Actions",
    id: "actions",
    cell: ({ row }) => {
      return <AddRfId id={row.original._id} />;
    },
  },
];
