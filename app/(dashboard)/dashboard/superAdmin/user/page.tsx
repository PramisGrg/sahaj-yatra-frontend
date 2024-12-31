"use client";
import MaxWidthContainer from "@/components/layouts/max-width-container";
import { Button } from "@/components/ui/button";
import {
  useGetUnverifiedUsers,
  useGetVerifiedUsers,
} from "@/services/tanstack-queries/user-queries";
import React, { useState } from "react";
import { UnverifiedTable } from "../components/table/unverified-table";
import { VerifiedTable } from "../components/table/verified-table";
import { verifiedcolumns } from "../components/column/verified-column";
import { unverifiedcolumns } from "../components/column/unverified-column";

const Page = () => {
  const [selectBtn, setSelectBtn] = useState(true);

  const { data: unverified } = useGetUnverifiedUsers();
  const unverifiedData = unverified?.data ?? [];

  const { data: verified } = useGetVerifiedUsers();
  const verifiedData = verified?.data ?? [];

  return (
    <MaxWidthContainer className="space-y-6">
      <div className="flex gap-10">
        <Button
          onClick={() => {
            setSelectBtn(true);
          }}
          className={`${
            selectBtn ? "bg-destructive" : "bg-none"
          } hover:bg-destructive`}
        >
          Unverified Users
        </Button>
        <Button
          onClick={() => {
            setSelectBtn(false);
          }}
          className={`${
            selectBtn ? "bg-none" : "bg-destructive"
          } hover:bg-destructive`}
        >
          Verified Users
        </Button>
      </div>
      <div>
        {selectBtn ? (
          <div>
            <UnverifiedTable
              columns={unverifiedcolumns}
              data={unverifiedData}
            />
          </div>
        ) : (
          <div>
            <VerifiedTable columns={verifiedcolumns} data={verifiedData} />
          </div>
        )}
      </div>
    </MaxWidthContainer>
  );
};

export default Page;
