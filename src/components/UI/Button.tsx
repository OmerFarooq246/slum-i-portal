import React from "react";
import clsx from "clsx";
import { Theme } from "@/typings";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'small' | 'medium' | 'large';
  theme?: Theme
}

const Button: React.FC<ButtonProps> = ({ children, className = "", theme = Theme.LIGHT, variant = "medium", ...props }) => {
  const sizeVariants = {
    small: "px-4 py-2 text-xs",
    medium: "px-5 py-3 text-sm",
    large: "px-6 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        "cursor-pointer shadow-xs transition duration-500 border rounded-3xl text-center",
        className,
        theme === Theme.LIGHT
        ? "bg-white/10 text-white hover:bg-white/30 focus:outline-1 focus:outline-white/50 border-gray-50/15"
        : "bg-black/5 border-black/2 text-foreground hover:bg-black/10 focus:outline-black/10",
        sizeVariants[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
