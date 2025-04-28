import ImgUpload from "@/components/ImgUpload/ImgUpload"
import Button from "../UI/Button"
import { Grid1, Map1, Scanning } from "iconsax-reactjs"

export default function CTA(){
  const links = [
    {
      label: "Try the Demo",
      link: "",
      icon: <Scanning size="24" variant="Bulk"/>,
    },
    {
      label: "Explore Datasets",
      link: "",
      icon: <Map1 size="24" variant="Bulk"/>,
    },
    {
      label: "Segmentation Techniques",
      link: "",
      icon: <Grid1 size="24" variant="Bulk"/>,
    },
  ]

  return (
    <div className='flex justify-between space-x-20 absolute top-0 left-0 pt-50 px-25 w-full'>
      <div className='w-full font-figtree text-white flex flex-col space-y-5 backdrop-blur-md bg-white/10 border border-gray-50/15 rounded-4xl px-7 py-7'>
        <div className="flex flex-col space-y-2">
          <h1 className='font-bold text-5xl font-figtree'>Slum-<i>i</i></h1>
          <h2 className='text-xl'>From Pixels to Policy</h2>
          <h1 className='font-semibold text-4xl'>Mapping Urban Informality with AI</h1>
        </div>
        <div className="flex space-x-5">
          {links.map((item, index) => 
            <Button 
              className=""
              key={index} 
              href={item.link}>
                <div className="flex items-center space-x-3">
                  {item.icon} 
                  <p>{item.label}</p>
                </div>
            </Button>
          )}
        </div>
      </div>
      <ImgUpload />
    </div>
  )
}