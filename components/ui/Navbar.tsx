import React from 'react'
import Link from 'next/link'
import NavItems from './NavItems'
import Image from 'next/image'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <Link href="/">
        <div className='flex items-center gap-2.5 h-16 cursor-pointer'>
          <Image 
            src="/images/logo.svg" 
            alt="logo" 
            width={46} 
            height={44}
            className="object-contain"
          />
        </div>
      </Link>

      <NavItems />

      <div className="flex gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
