import { useEffect, useState } from "react";
import Image from 'next/image'
import Button from "../UI/Button";
import { CloseCircle, Image as ImageIcon } from "iconsax-reactjs";
import Select from "../UI/Select";
import clsx from "clsx";
import { ImgUploadRes, Options, Theme } from "@/typings";
import axios from "axios";
import Loader from "../Loader/loader";

type Image = {
  preview: string;
  raw: File | null;
};

interface ImgUploadProps{
  className?: string;
  theme: Theme
  onSuccess?: (data: ImgUploadRes) => void
}

export default function ImgUpload({className, theme, onSuccess}: ImgUploadProps){
  const [image, setImage] = useState<Image>({ preview: "", raw: null })
  const [models, setModels] = useState<Options[]>([])
  const [selectedModel, setSelectedModel] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function getModels() {
      try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/models`)
        setModels(res.data.map((v: string) => ({
          label: v,
          value: v
        })))
      }
      catch (error){
        console.log("error in get models: ", error)
      }
    }
    getModels()

  }, [])

  async function handleSegmentation(){
    try{
      setLoading(true)
      if (!image.raw || !selectedModel) {
        console.log("Missing image or model");
        return;
      }

      const formData = new FormData();
      formData.append('image', image.raw);
      formData.append('model', selectedModel);

      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/segment`, 
        formData,
        {
          headers: {
          'Content-Type': 'multipart/form-data',
          },
        }
      );
      onSuccess?.(res.data)
      console.log("res.data of segment: ", res.data);
    }
    catch (error){
      console.log("error in handleSegmentation: ", error)
    }
    finally{
      setLoading(false)
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
       })
    }
  }
  
  return (
    <div className={clsx(
      "flex flex-col space-y-5 backdrop-blur-md border rounded-4xl px-7 py-7 select-none shadow-lg",
      className,
      theme === Theme.LIGHT 
      ? "bg-white/10 border-gray-50/15"
      : "border-black/5"
    )}>
      <Select 
        value={selectedModel}
        label={"Select Model"}
        options={models}
        onSelect={(value) => setSelectedModel(value)} 
        theme={theme}      
      />
      {!image.preview
      ? <label 
          htmlFor="uploadImg"
          onClick={(e) => {
            if (!selectedModel) {
              e.preventDefault()
              alert("Select a model first")
              return
            }
          }} 
          className={clsx(
            "relative cursor-pointer shadow-xs transition duration-500 text-sm border w-full h-64 rounded-4xl flex flex-col items-center justify-center space-y-2",
            theme === Theme.LIGHT 
            ? "bg-white/15 text-white/80 hover:bg-white/20 hover:shadow-white/10 border-gray-50/15"
            : "bg-black/2 text-foreground hover:bg-black/5 border-black/5"
          )}
        >
          <ImageIcon size="28" variant="Bold"/>
          <span>Upload Image</span>
        </label>
      : <div className="relative">
        <Image 
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
        />
        <div 
          className="absolute cursor-pointer top-4 right-4"
          onClick={() => {
            setImage({ preview: "", raw: null })
            onSuccess?.({
              model: "",
              image: "",
              mask: ""
            })
          }}
        >
          <CloseCircle size="24" variant="Bold" className="text-black/30"/>
        </div>
      </div>}
      <input 
        id="uploadImg" 
        className="hidden" 
        type="file" 
        onChange={handleChange} 
        accept=".png, .jpg, .jpeg"
      />
      <Button 
        onClick={() => handleSegmentation()}
        theme={theme} 
        disabled={image.preview ? false : true}
      >
        <div className="flex items-center justify-center space-x-3">
          {loading && <Loader theme={theme} className="w-4.5 h-4.5 border-3"/>}
          <span>Perform Segmentation</span>
        </div>
      </Button>
    </div>
  )
}