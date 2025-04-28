import Image from 'next/image'
import CTA from "@/components/Hero/CTA"

export default function Hero(){
  return (
    <div className='relative w-full'>
      <Image 
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