"use client";
import React, { useState, useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { toast } from "sonner";
import { axiosAuthInstance } from "@/services/axios/axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import khaltiPicture from "@/public/images/khalti-removebg-preview.png";
import Image from "next/image";
import { Label } from "@/components/ui/label";

const Payment = () => {
  const [ampunt, setAmount] = useState(0);
  const userId = 123;
  const config = {
    publicKey: "test_public_key_77bac81b32ed4e95b995bfbe502a3ab8",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess: (payload) => {
        console.log(userId);
        const payloadWithUserId = { ...payload, userId };
        axiosAuthInstance
          .post("/transaction/verify-payment/", payloadWithUserId)
          .then((response) => {
            console.log(response);
            console.log(response?.status);
          })
          .catch((error) => {
            toast.error(error?.message);
          });
      },
      onError: (error) => {
        console.log(error);
      },
      onClose: () => {
        console.log("widget is closing");
      },
    },

    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkout = new KhaltiCheckout(config);
      console.log(checkout);
    }
  }, [userId]);

  const btnOnClick = (e) => {
    console.log(userId);
    e.preventDefault();
    if (typeof window !== "undefined") {
      const checkout = new KhaltiCheckout(config);
      checkout.show({ amount: ampunt * 100 });
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <section>
      <h1 className="font-bold">Payment Method</h1>
      <h3 className="text-gray-400 text-sm">Pay Via Khalti</h3>
      <div className="flex">
        <div className="w-1/2">
          <Image
            height={1000}
            width={1000}
            src={khaltiPicture}
            alt="Khalti picture"
            className="w-40 h-36 rounded-md"
          />
        </div>
        <form className="w-1/2 space-y-3">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="Enter name" />
          </div>
          <div className="space-y-2">
            <Label>Amount</Label>
            <Input onChange={handleAmountChange} placeholder="Enter amount" />
          </div>
          <Button type="submit" onClick={btnOnClick} id="payment-button">
            Pay with Khalti
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Payment;
