import Link from "next/link"
import Button from "../UI/Button"
import { useRouter } from "next/router"
import { Theme } from "@/typings"

interface HeaderProps{
  theme: Theme
}

export default function Header({theme}: HeaderProps){
  const links = [
    {
      label: "Portal",
      link: "/portal"
    },
    {
      label: "Datasets",
      link: ""
    },
    {
      label: "Techniques",
      link: ""
    },
    {
      label: "About",
      link: ""
    },
    {
      label: "Collaborations",
      link: ""
    },
    {
      label: "Team",
      link: ""
    },
  ]

  const router = useRouter()

  return (
    <div className="fixed top-0 left-0 z-20 w-full flex justify-between text-sm py-5 px-10">
      <Link 
        href="/" 
        className={`rounded-3xl font-extrabold text-xl outline-none ${theme === Theme.DARK ? "text-foreground" : "text-white"}`}
      >
        Slum-<i>i</i>
      </Link>
      <nav className="flex space-x-2.5">
        {links.map((item, index) => 
          <Button 
            variant="small"
            theme={theme}
            className="backdrop-blur-xl"
            key={index} 
            onClick={() => router.push(item.link)}
          >
              {item.label}
          </Button>
        )}
      </nav>
    </div>
  )
}