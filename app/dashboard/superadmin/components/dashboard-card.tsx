"use client";
import { useGetSuperAdminDashboardData } from "@/services/tanstack-queries/dashboard-queries";
import {
  useGetUnverifiedUsers,
  useGetVerifiedUsers,
} from "@/services/tanstack-queries/user-queries";
import Image from "next/image";
import React from "react";
import image from "@/public/images/khalti.jpg";

export const CountCard = () => {
  const { data: count } = useGetSuperAdminDashboardData();
  const { userCount, adminCount, busCount } = count?.data || {
    userCount: 0,
    adminCount: 0,
    busCount: 0,
  };

  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
        <div className=" border p-4 rounded-md space-y-3">
          <h1 className="text-sm text-gray-500">Total Users: </h1>
          <p className="text-xl font-bold">{userCount} Users</p>
        </div>
        <div className=" border p-4 rounded-md space-y-3">
          <h1 className="text-sm text-gray-500">Total Bus Owners: </h1>
          <p className="text-xl font-bold">{adminCount} Bus Owners</p>
        </div>
        <div className=" border p-4 rounded-md space-y-3">
          <h1 className="text-sm text-gray-500">Total Bus: </h1>
          <p className="text-xl font-bold">{busCount} Buses</p>
        </div>
        <div className=" border p-4 rounded-md space-y-3">
          <h1 className="text-sm text-gray-500">Total Profit: </h1>
          <p className="text-xl font-bold">0 Profit</p>
        </div>
      </div>
    </div>
  );
};

export const UnVerfiedUsersCard = () => {
  const { data: unVerifiedUsers } = useGetUnverifiedUsers();
  const unVerifiedUsersData = unVerifiedUsers?.data ?? [];

  return (
    <div className="space-y-4 border p-4 rounded-md max-h-[500px]">
      <div className="space-y-1">
        <h1>Unverified Users :</h1>
        <p className="text-sm text-gray-500">Assign RFID to verify user</p>
      </div>
      <div className="space-y-4">
        {unVerifiedUsersData.length !== 0 ? (
          unVerifiedUsersData.map((user) => (
            <div className="flex justify-between" key={user._id}>
              <div className="flex gap-2">
                <Image
                  height={1000}
                  width={1000}
                  className="w-10 h-10 rounded-full"
                  src={image}
                  alt="@image"
                />
                <div className="text-sm">
                  <h1>{user.username}</h1>
                  <h3 className="text-gray-500 break-words">{user.email}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="h-10 text-gray-500 text-sm">No un verified users</h1>
        )}
      </div>
    </div>
  );
};

export const VerfiedUsersGrid = () => {
  const { data: verifiedUsers } = useGetVerifiedUsers();
  const verifiedUserData = verifiedUsers?.data ?? [];
  return (
    <div className="space-y-4 border p-4 rounded-md">
      <div className="space-y-1">
        <h1>Verified Users :</h1>
        <p className="text-sm text-gray-500">Verified users are super nice</p>
      </div>
      <div className="space-y-2">
        {verifiedUserData.length !== 0 ? (
          verifiedUserData.map((user) => (
            <div className="flex justify-between" key={user._id}>
              <div className="flex gap-2">
                <Image
                  height={1000}
                  width={1000}
                  className="w-10 h-10 rounded-full"
                  src={image}
                  alt="@image"
                />
                <div className="text-sm">
                  <h1>{user.username}</h1>
                  <h3 className="text-gray-500 break-words">{user.email}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="h-10 text-gray-500 text-sm">No un verified users</h1>
        )}
      </div>
    </div>
  );
};
