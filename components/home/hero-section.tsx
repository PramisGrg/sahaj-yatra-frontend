"use client";
import React from "react";
import { BackgroundLines } from "../ui/background-lines";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div>
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl lg:text-7xl font-sans py-2 relative z-20 font-bold tracking-tight">
            Digitalize The Transportaion
          </h1>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-4xl font-sans py-2 relative z-20 tracking-tight">
            Sahaj Yatra : Where technology meets the open road.
          </h2>
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="max-w-xl mx-auto text-lg text-neutral-700 dark:text-neutral-400 text-center">
              यात्राको सहयात्री हाम्रो सहजयात्री
            </p>
            <Button className="px-8 py-4 rounded-md bg-primary text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-primary">
              Get Started
            </Button>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default HeroSection;
