import { Theme } from "@/typings";
import clsx from "clsx";

interface LoaderProps{
  theme: Theme
  className?: string;
}

export default function Loader({theme, className}: LoaderProps){
  return (
    <div className={clsx(
      "rounded-full animate-spin",
      className,
      theme === Theme.LIGHT 
      ? "border-foreground/10 border-t-foreground border-r-foreground"
      : "border-foreground/10 border-t-foreground border-r-foreground"
    )}>
    </div>
  )
}