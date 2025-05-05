import React, { ReactNode, useState } from "react";
import clsx from "clsx";
import { ArrowDown2 } from "iconsax-reactjs";
import { Theme } from "@/typings";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  className?: string;
  variant?: 'small' | 'medium' | 'large';
  label: string
  value: string
  options: Option[]
  onSelect: (value: string) => void
  theme: Theme
}

const Select: React.FC<SelectProps> = ({ label, value, options, onSelect, className = "", variant = "medium", theme }) => {
  const [open, setOpen] = useState<boolean>(false)
  const sizeVariants = {
    small: "px-4 py-2 text-xs",
    medium: "px-5 py-3 text-sm",
    large: "px-6 py-4",
  };

  return (
    <div
      onClick={() => setOpen(!open)}
      className={clsx(
        "relative cursor-pointer shadow-xs text-sm focus:outline-1 transition duration-500 border rounded-3xl text-center",
        className,
        sizeVariants[variant],
        theme === Theme.LIGHT
        ? "bg-white/10 text-white hover:bg-white/30 focus:outline-white/50 border-gray-50/15"
        : "bg-black/5 text-foreground hover:bg-black/10 focus:outline-black/10 border-black/2"
      )}
    >
      <div className="flex justify-between items-center">
        <span>{value ? options.find(v => v.value === value)?.label : label}</span>
        <ArrowDown2 size="32" className="w-4 h-4"/>
      </div>
      {open && 
      <div className={`z-50 absolute top-11 left-0 flex flex-col items-start justify-start w-full border ${theme === Theme.LIGHT ? "border-gray-50/20" : "border-black/5"} rounded-3xl`}>
        {options.map((item, index) => 
          <div 
            key={index} 
            className={clsx(
              "z-50 w-full cursor-pointer text-sm transition duration-500 border-b text-start",
              sizeVariants[variant],
              `${index === 0 ? "rounded-t-3xl" : ""}`,
              `${index === options.length-1 ? "rounded-b-3xl" : ""}`,
              theme === Theme.LIGHT
              ? "bg-white/10 text-white hover:bg-white/30 border-gray-50/15 shadow-xs"
              : "bg-black/2 text-foreground hover:bg-black/5 border-black/5"
            )}
            onClick={() => {
              onSelect(item.value)
              setOpen(false)
            }}
          >
            {item.label}
          </div>
        )}
      </div>}
    </div>
  );
};

export default Select;