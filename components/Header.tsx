import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import logo from '../public/logo.png'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import BasicMenu from './BasicMenu'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  

  return (
    <header className={`${isScrolled && 'bg-red-500'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image src={logo} height={100} width={100} alt='logo' className="cursor-pointer object-contain"/>
        

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header