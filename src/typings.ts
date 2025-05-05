export enum Theme{
  LIGHT = "light",
  DARK = "dark"
}

export interface Options{
  label: string
  value: string
}

export interface ImgUploadRes{
  model: string
  image: string
  mask: string
}