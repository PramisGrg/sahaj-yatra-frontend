"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { superadminLoginSchema } from "@/schema/auth-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useLoginSuperAdmin } from "@/services/tanstack-queries/auth-queries";
import { toast } from "sonner";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export type TSuperadminLoginSchema = z.infer<typeof superadminLoginSchema>;

const Login = () => {
  const router = useRouter();
  const loginSuperAdmin = useLoginSuperAdmin();

  const form = useForm<TSuperadminLoginSchema>({
    resolver: zodResolver(superadminLoginSchema),
  });

  const onSubmit = (values: TSuperadminLoginSchema) => {
    console.log(values);
    loginSuperAdmin.mutate(values, {
      onSuccess: (data) => {
        toast.success(data.message);
        Cookies.set("token", data.token);
        router.push("/dashboard/superadmin");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.error);
        } else {
          toast.error("unexpected error has occured");
        }
      },
    });
  };

  return (
    <div className="relative">
      <h1 className="absolute left-1/2 md:text-3xl text-xl top-8 transform -translate-x-1/2">
        Sahaj Yatra
      </h1>
      <div className="flex h-screen items-center justify-center">
        <div className="border p-8 rounded-lg space-y-4 md:w-[32rem] w-[90vw]">
          <h1 className=" text-xl">Super Admin Login</h1>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Register</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
