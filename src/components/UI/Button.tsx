import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ children, className = "", size = "medium", ...props }) => {
  const sizeClasses = {
    small: "px-4 py-2 text-xs",
    medium: "px-5 py-3 text-sm",
    large: "px-6 py-4",
  };

  return (
    <button
      className={clsx(
        "cursor-pointer shadow-xs text-sm bg-white/10 text-white hover:bg-white/35 focus:outline-1 focus:outline-white/50 transition duration-500 border border-gray-50/15 rounded-3xl text-center",
        className,
        sizeClasses[size]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
