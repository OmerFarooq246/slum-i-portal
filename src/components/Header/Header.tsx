import Link from "next/link"
import Button from "../UI/Button"

export default function Header(){
  const links = [
    {
      label: "Demo",
      link: ""
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

  return (
    <div className="fixed top-0 left-0 z-20 w-full flex justify-between text-sm py-5 px-10">
      <Link 
        href="/" 
        className="text-white rounded-3xl font-extrabold text-xl outline-none"
      >
        Slum-<i>i</i>
      </Link>
      <nav className="flex space-x-2.5">
        {links.map((item, index) => 
          <Button 
            size="small"
            className="backdrop-blur-xl"
            key={index} 
            // href={item.link}
          >
              {item.label}
          </Button>
        )}
      </nav>
    </div>
  )
}