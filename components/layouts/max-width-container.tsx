import React from "react";
import { cn } from "@/lib/utils";

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <div className={cn("px-4 sm:px-8 md:px-16 lg:px-24", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
