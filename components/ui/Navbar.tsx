import React from 'react'
import '../../app/globals.css'
import Link from 'next/link'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className='flex items-center gap-2.5 h-16 cursor-pointer'>
          <img 
            src="/images/logo.svg" 
            alt="logo" 
            width={46} 
            height={44}
          />
        </div>
      </Link>
      
      {/* Use the NavItems component instead of hardcoded items */}
      <NavItems />
    </nav>
  )
}

export default Navbar