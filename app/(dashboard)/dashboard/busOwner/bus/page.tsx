"use client";
import { columns } from "../components/table-column";
import { DataTable } from "../components/bus-table";
import MaxWidthContainer from "@/components/layouts/max-width-container";
import { UseGetBus } from "@/services/tanstack-queries/bus-queries";
import { AddBus } from "../components/add-bus";

export default function DemoPage() {
  const { data: buses } = UseGetBus();
  const busesData = buses?.data ?? [];

  return (
    <MaxWidthContainer className="space-y-10">
      <AddBus />
      <DataTable columns={columns} data={busesData} />
    </MaxWidthContainer>
  );
}
