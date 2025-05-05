import { ArrowRight, I3Dcube, Map1 } from "iconsax-reactjs"
import Button from "../UI/Button"
import { Theme } from "@/typings"

interface Dataset {
  title: string,
  cities: string[]
  spatialRes: string
  description: string
  provider: string
}

const datasets: Dataset[] = [
  {
    title: "Digital Globe",
    cities: ["Medellin", "Nairobi", "Makoko", "ElDaein", "ElGeneina"],
    spatialRes: "30cm  - 50cm",
    description: "Very High Spatial Resolution imagery capturing detailed organization of housing settlements.",
    provider: "Patrick Helber - DFKI"
  },
  {
    title: "Sentinal-2",
    cities: ["Medellin", "Nairobi", "Makoko", "ElDaein", "ElGeneina", "Kianda", "Capetown", "Mumbai"],
    spatialRes: "10m - 20m",
    description: "Low Resolution, Multi-Spectral imagery capturing surface reflectance to differentiate land cover types.",
    provider: "Patrick Helber - DFKI"
  },
  {
    title: "Pakistan Slum Dataset",
    cities: ["Islamabad", "Faisalabad", "Lahore", "Multan", "Faisalabad"],
    spatialRes: "30cm",
    description: "First ever remote sensing dataset mapping slums of major urban cities of Pakistan.",
    provider: "Slum-i"
  },
]

export default function Datasets(){
  return (
    <div className="bg-[url(/datasets/i.png)] bg-cover bg-center">
      <div className="flex flex-col items-center space-y-45 px-25 py-25 bg-linear-to-b from-black/10 to-[#FFC857]/5">
        <div className="w-fit py-5 px-10 flex flex-col space-y-8 items-center">
          <h1 className="font-bold text-5xl text-center text-white drop-shadow-lg">Remote Sensing Datasets</h1>
          <Button 
            variant="medium"
            theme={Theme.LIGHT}
            className="backdrop-blur-xl bg-white/30"
          >
            <div className="flex items-center space-x-1.5">
              <p>Eplore More</p>
              <ArrowRight size="15" variant="Outline"/>
            </div>
          </Button>
        </div>
        <div className="flex space-x-10">
          {datasets.map((item, index) => 
            <DatasetItem key={index} item={item} />
          )}
        </div>
      </div>
    </div>
  )
}

interface DatasetItemI {
  item: Dataset
  key: number
}
function DatasetItem({ item, key }: DatasetItemI) {
  return (
    <div key={key} className="cursor-pointer backdrop-blur-md bg-white/50 hover:bg-white/75 hover:border-gray-50/30 transition duration-500 w-1/3 flex flex-col text-foreground border border-gray-100/30 rounded-3xl p-7 shadow-2xl">
      <h1 className="font-bold text-2xl pb-3">{item.title}</h1>
      <div className="flex flex-col pb-5">
        <p className="text-[14px]">Cities: {item.cities.length}</p>
        <p className="text-[14px]">Spatial Resolution: {item.spatialRes}</p>
        <p className="text-[14px]">Provided By: {item.provider}</p>
      </div>
      <p className="text-[14px]">{item.description}</p>
    </div>
  )
}