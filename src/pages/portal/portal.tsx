import ImgUpload from "@/components/ImgUpload/ImgUpload";
import Masks from "./masks";
import Button from "@/components/UI/Button";
import { ImgUploadRes, Theme } from "@/typings";
import { Map1, Image } from "iconsax-reactjs";
import { useState } from "react";

export default function Portal(){
  const [img, setImage] = useState<string>()
  const [mask, setMask] = useState<string>()

  function handleUpload(data: ImgUploadRes){
    setImage(data.image)
    setMask(data.mask)
  }

  return (
    <div className="flex flex-col space-y-10 w-full px-25 py-21">
      <h1 className="text-2xl font-bold text-center">Segmentation Portal</h1>
      {/* <div className="flex justify-center space-x-5">
        <Button 
          theme={Theme.DARK}
        >
          <div className="flex items-center space-x-3">
            <Image className="w-6.5 h-6.5" variant="Bulk"/>
            <p>Upload Image</p>
          </div>
        </Button>
        <Button 
          theme={Theme.DARK}
        >
          <div className="flex items-center space-x-3">
            <Map1 className="w-6.5 h-6.5" variant="Bulk"/>
            <p>Select from Map</p>
          </div>
        </Button>
      </div> */}
      <div className="flex space-x-10">
        <div className="w-1/2">
          <ImgUpload theme={Theme.DARK} onSuccess={handleUpload}/>
        </div>
        <div className="w-1/2">
          <Masks imagePath={img || ""} maskPath={mask || ""} theme={Theme.DARK}/>
        </div>
      </div>
    </div>
  )
}