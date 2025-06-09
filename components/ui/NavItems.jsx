"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import clsx from 'clsx' // Make sure clsx is installed: npm install clsx

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Companion', href: '/companion' },
  { label: 'My Journey', href: '/my-journey' },
]

const NavItems = () => {
  const pathname = usePathname();
  
  return (
    <nav className='flex items-center gap-8 cursor-pointer'>
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={clsx(
            'hover:text-primary transition-colors',
            pathname === href && 'text-primary font-semibold'
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default NavItems