// components/ui/button.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  className,
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2";

  const variantStyles = {
    solid: "bg-indigo-600 hover:bg-indigo-700",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
