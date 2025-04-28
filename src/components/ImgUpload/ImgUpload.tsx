import { useState } from "react";
import Image from 'next/image'
import Button from "../UI/Button";
import { Image as ImageIcon } from "iconsax-reactjs";

type Image = {
  preview: string;
  raw: File | null;
};

export default function ImgUpload(){
  const [image, setImage] = useState<Image>({ preview: "", raw: null })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
       })
    }
  }
  
  return (
    <div className="max-w-1/3 flex flex-col space-y-5 backdrop-blur-md bg-white/10 border border-gray-50/15 rounded-4xl px-7 py-7">
      {!image.preview
      ? <label 
          htmlFor="uploadImg" 
          className="cursor-pointer bg-white/15 hover:bg-white/20 shadow-xs hover:shadow-white/10 transition duration-500 text-sm text-white/80 border border-gray-50/15 w-64 h-64 rounded-4xl flex flex-col items-center justify-center space-y-2"
        >
          <ImageIcon size="28" variant="Bold"/>
          <span>Upload Image</span>
        </label>
      : <Image 
        className="rounded-4xl shadow-xs"
        src={image.preview}
        sizes="100vw"
        width={200}
        height={200}
        style={{
          width: '100%',
          height: '100%',
        }}
        alt='uplaoded-img'
        loading='eager'
      />}
      <input 
        id="uploadImg" 
        className="hidden" 
        type="file" 
        onChange={handleChange} 
        accept=".png, .jpg, .jpeg"
      />
      <Button 
        onClick={() => {}} 
        disabled={image.preview ? false : true}
      >
        Segment
      </Button>
    </div>
  )
}