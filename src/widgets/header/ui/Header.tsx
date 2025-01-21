import { FC } from 'react'
import Logo from '@/shared/assets/icons/logo.svg'
import MenuIcon from '@/shared/assets/icons/menu.svg'

const Header: FC = () => {
  return (
    <header className="header relative z-10 flex justify-between main-container">
      <Logo className="mt-8 md:mb-0 mb-3"/>
      <button className="max-w-28 w-full h-full flex items-center justify-center bg-primary rounded-b-full">
        <MenuIcon className="w-[60px]"/>
      </button>
    </header>
  )
}

export default Header
