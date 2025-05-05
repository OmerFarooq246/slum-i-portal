import Image from 'next/image'
import CTA from "@/components/Landing/CTA"

export default function Hero(){
  return (
    <div className='relative w-full'>
      <Image 
        className="brightness-120"
        src="/heros/nirobi.jpg"
        sizes="100vw"
        width={10}
        height={10}
        style={{
          width: '100%',
          height: 'auto',
        }}
        alt='hero'
        loading='eager'
      />
      <CTA />
    </div>
  )
}