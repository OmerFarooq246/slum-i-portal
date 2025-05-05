import BaseLayout from "@/components/BaseLayout/BaseLayout"
import Datasets from "@/components/Landing/Datasets"
import Hero from "@/components/Landing/Hero"
import { Theme } from "@/typings"

export default function Index() {
  return (
    <BaseLayout title={"Home"} theme={Theme.LIGHT}>
      <Hero />
      <Datasets />
    </BaseLayout>
  )
}