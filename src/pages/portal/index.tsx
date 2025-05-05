import BaseLayout from "@/components/BaseLayout/BaseLayout"
import Portal from "./portal"
import { Theme } from "@/typings"

export default function Index() {
  return (
    <BaseLayout title={"Home"} theme={Theme.DARK}>
      <Portal />
    </BaseLayout>
  )
}