"use client";
import React, { useState, useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { toast } from "sonner";
import { axiosAuthInstance } from "@/services/axios/axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import khaltiPicture from "@/public/images/khalti.jpg";
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
    <section className="space-y-4">
      <header className="flex flex-col items-center space-y-4">
        <h1 className="font-bold">Payment Method</h1>
        <Image
          height={1000}
          width={1000}
          src={khaltiPicture}
          alt="Khalti picture"
          className="w-40 h-36 rounded-md"
        />
      </header>
      <form>
        <fieldset className="space-y-4 w-1/2 mx-auto">
          <div>
            <Label>Name</Label>
            <Input placeholder="Enter name" />
          </div>
          <div>
            <Label>Amount</Label>
            <Input onChange={handleAmountChange} placeholder="Enter amount" />
          </div>
        </fieldset>
        <Button
          className="w-1/2 mx-auto block mt-4"
          type="submit"
          onClick={btnOnClick}
          id="payment-button"
        >
          Pay with Khalti
        </Button>
      </form>
    </section>
  );
};

export default Payment;
