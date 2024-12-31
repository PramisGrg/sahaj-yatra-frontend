import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useVerifyUsers } from "@/services/tanstack-queries/user-queries";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { AxiosError } from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const AddRfId = ({ id }: { id: string }) => {
  const [rfidNumber, setRfidNumber] = useState("");
  const [open, setOpen] = useState(false);

  const verifyUser = useVerifyUsers();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyUser.mutate(
      { id, rfidNumber },
      {
        onSuccess: (data) => {
          toast.success(data.message);
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            toast.error(error.response?.data.error);
          } else {
            toast.error("unexpected error has occured");
          }
        },
      }
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add RfId</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add RfId</DialogTitle>
          <DialogDescription>Add your RfId from your card</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            onChange={(e) => {
              setRfidNumber(e.target.value);
            }}
            placeholder="enter rf id"
          ></Input>
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddRfId;
