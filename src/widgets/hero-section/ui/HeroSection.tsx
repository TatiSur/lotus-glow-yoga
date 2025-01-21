import { FC } from 'react'
import Image from 'next/image'

import { Button } from '@/shared/ui/button'
import ArrowIcon from '@/shared/assets/icons/arrow.svg'
import PhoneIcon from '@/shared/assets/icons/phone.svg'

const HeroSection: FC = () => {
  return (
    <section className="hero flex gap-5 main-container">
      <div className="flex-1 h-100 flex flex-col justify-center items-center md:items-start py-10">
        <p
          className="text-xs md:text-sm lg:text-base md:text-start text-center font-bold tracking-[0.6em] text-primary xs:mb-9 mb-11">
          LOTUS GLOW YOGA CLUB
        </p>
        <h1
          className="lg:text-7xl md:text-5xl text-4xl md:text-start text-center  font-bold text-light-text md:mb-[52px] mb-[73px]">
          FIND YOUR <br/> INNER <span className="text-primary">LIGHT</span>
        </h1>

        <div
          className="md:max-w-full max-w-[295px] mb-20 md:mb-[72px] md:text-start text-center text-light-text text-base md:text-xl font-normal">Illuminate
          your path with
          Lotus Glow – find
          balance and
          serenity
          through our organic yoga experience.
        </div>
        <div className="flex gap-2.5">
          <Button className="max-w-72 xs:px-8 px-[20px] tracking-normal 2xs:tracking-[0.23em]">
            Book a Session
            <ArrowIcon/>
          </Button>
          <a href="tel:3125557890" className="md:hidden shrink-0 flex h-100 w-[87px]">
            <PhoneIcon className="w-100 h-100"/>
          </a>
        </div>
      </div>
      <div className="relative flex-1 items-end md:flex hidden -mr-10 lg:mr-0">
        <Image src="/images/hero-bg.webp" alt="Women in yoga pose" width={650} height={1043}
               className="absolute h-[calc(100%+var(--height-header))] -top-[var(--height-header)] object-cover"/>
        <a href="tel:3125557890"
           className="w-full text-center relative block bg-primary rounded-t-full text-dark-text text-lg tracking-[0.23em] py-7 pr-12 pl-[116px] font-medium">
         <span className="font-lato font-bold xl:inline hidden">
           GIVE US A CALL:
         </span>
          (312) 555-7890
          <PhoneIcon className="absolute left-0 bottom-0 h-full"/>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
