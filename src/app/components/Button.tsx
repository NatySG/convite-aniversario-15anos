"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ children, variant = "primary", onClick }: ButtonProps) {
  
  const baseClasses = "px-6 py-3 rounded-lg shadow transition";
  
  const variantClasses =
    variant === "primary"
      ? "bg-[#8DA0D6] text-white hover:bg-[#5C66A3]"
      : "bg-[#e1e6d3] text-[#4e5861] hover:bg-[#b1cca4]";


  return (
    
    <button className={`cursor-pointer ${montserrat.className} ${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
  
}
