import Select from "@/components/UI/Select"
import { Theme } from "@/typings"
import { useEffect, useState } from "react"
import Image from 'next/image'
import clsx from "clsx"
import { Grid1 } from "iconsax-reactjs"
import Button from "@/components/UI/Button"
import Loader from "@/components/Loader/loader"
import OverlayCanvas from "./overlay"

interface MasksProps{
  imagePath: string
  maskPath: string
  theme: Theme
  className?: string;
}

const options = [
  {
    label: "Mask",
    value: "mask"
  },
  {
    label: "Overlay",
    value: "overlay"
  },
]

export default function Masks({imagePath, maskPath, theme, className}: MasksProps){
  const [view, setView] = useState<string>("mask")
  const [loading, setLoading] = useState<boolean>(false)

  console.log(`${process.env.NEXT_PUBLIC_BACKEND}/${maskPath}`)

  function handleDownload(){

  }

  return (
    <div className={clsx(
      "flex flex-col space-y-5 backdrop-blur-md border rounded-4xl px-7 py-7 select-none shadow-lg",
      className,
      theme === Theme.LIGHT 
      ? "bg-white/10 border-gray-50/15"
      : "border-black/5"
    )}>
      <div className="flex space-x-4">
      {options.map((item, index) => 
        <Button 
          key={index}
          className={`w-1/2 ${view === item.value ? "!bg-black/10 !border-gray-800/15" : ""}`}
          onClick={() => setView(item.value)}
          theme={theme} 
          disabled={(!imagePath && !maskPath) ? true : false}
        >
          {item.label}
        </Button>
      )}
      </div>
      {(!imagePath && !maskPath)
      ? <div className={clsx(
        "shadow-xs transition duration-500 text-sm border w-full h-64 rounded-4xl flex flex-col items-center justify-center space-y-2",
        theme === Theme.LIGHT 
        ? "bg-white/15 text-white/80 border-gray-50/15"
        : "bg-black/2 text-foreground border-black/5"
      )}>
        <Grid1 size="28" variant="Bulk"/>
        <span>Segmentation Result</span>
      </div>
    : view === "mask" 
    ? <Image 
      className="rounded-4xl shadow-xs"
      src={`${process.env.NEXT_PUBLIC_BACKEND}/${maskPath}`}
      sizes="100vw"
      width={200}
      height={200}
      style={{
        width: '100%',
        height: '100%',
      }}
      alt='uplaoded-img'
      loading='eager'
    />
    : <OverlayCanvas 
      baseImageUrl={`${process.env.NEXT_PUBLIC_BACKEND}/${imagePath}`} 
      maskImageUrl={`${process.env.NEXT_PUBLIC_BACKEND}/${maskPath}`} 
    />}
    <Button 
      onClick={() => handleDownload()}
      theme={theme} 
      disabled={(!imagePath && !maskPath) ? true : false}
    >
      <div className="flex items-center justify-center space-x-3">
        {loading && <Loader theme={theme} className="w-4.5 h-4.5 border-3"/>}
        <span>Download</span>
      </div>
    </Button>
    </div>
  )
}