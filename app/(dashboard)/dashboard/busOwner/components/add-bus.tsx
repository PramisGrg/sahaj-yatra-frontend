"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerBusSchema } from "@/schema/bus-schema";
import { z } from "zod";
import { useRegisterBus } from "@/services/tanstack-queries/bus-queries";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useState } from "react";

export type TRegisterBusSchema = z.infer<typeof registerBusSchema>;

export function AddBus() {
  const [open, setOpen] = useState(false);
  const form = useForm<TRegisterBusSchema>({
    resolver: zodResolver(registerBusSchema),
  });

  const registerBus = useRegisterBus();

  const onSubmit = (values: TRegisterBusSchema) => {
    console.log(values);
    registerBus.mutate(values, {
      onSuccess: (data) => {
        toast.success(data.message);
        setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Bus</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[40vw]">
        <DialogHeader>
          <DialogTitle>Bus Register</DialogTitle>
          <DialogDescription>Register your bus here.</DialogDescription>
        </DialogHeader>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="busNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bus Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your bus number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="busType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bus Types</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your bus type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="busRoute"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bus Route</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your bus route" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="busSeats"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bus Seats</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your bus seats" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Register</Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
