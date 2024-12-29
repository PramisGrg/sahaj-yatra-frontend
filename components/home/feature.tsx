"use client";
import React from "react";
import MaxWidthContainer from "../layouts/max-width-container";
import {
  HandCoins,
  MapPinCheck,
  ArrowLeftRight,
  ChartSpline,
} from "lucide-react";
import { motion } from "framer-motion";
import { featuresSlideUp } from "../animations/navbar-slideup";

const features = [
  {
    id: 1,
    icon: <HandCoins className="h-10 w-10" />,
    content: "Users can pay fare digitally via Khalti",
  },
  {
    id: 2,
    icon: <MapPinCheck className="h-10 w-10" />,
    content:
      "Users as well as Busowner can track live locations of bus in maps",
  },
  {
    id: 3,
    icon: <ArrowLeftRight className="h-10 w-10" />,
    content:
      "Load and inquiry the balance as well as their transaction history",
  },
  {
    id: 4,
    icon: <ChartSpline className="h-10 w-10" />,
    content: "Bus owners can aanlyze the revenue and bus status",
  },
];
const Feature = () => {
  return (
    <MaxWidthContainer className="py-32 space-y-14">
      <h1 className="text-xl md:text-3xl">Features of Sahaj Yatra 🎄 </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-14">
        {features.map((item, index) => (
          <motion.div
            variants={featuresSlideUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            className="border p-4 text-[18px] rounded-xl space-y-6"
            key={item.id}
          >
            <p className="bg-primary text-white rounded-full w-16 p-3">
              {item.icon}
            </p>
            <p className="">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </MaxWidthContainer>
  );
};

export default Feature;
