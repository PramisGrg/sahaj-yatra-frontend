"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type Payment = {
  _id: string;
  busNumber: string;
  busType: string;
  busRoute: string;
  busSeats: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "busNumber",
    header: "Bus Number",
  },
  {
    accessorKey: "busType",
    header: "Bus Type",
  },
  {
    accessorKey: "busRoute",
    header: "Bus Route",
  },
  {
    accessorKey: "busSeats",
    header: "Bus Seats",
  },
  {
    accessorKey: "Actions",
    id: "actions",
    cell: () => {
      //   const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            //   onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
