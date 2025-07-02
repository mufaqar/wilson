'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaChevronDown, FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

interface MenuItem {
  name: string;
  href: string;
  submenu?: boolean;
}

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#', submenu: true },
  { name: 'Services', href: '#', submenu: true },
  { name: 'Industries We Serve', href: '#', submenu: true },
  { name: 'Career', href: '/career' },
];

export default function Header() {
 // const [hovered, setHovered] = useState<string | null>(null);
  const [mblMenu, setmblMenu] = useState(false);

  return (
    <header className="p-8 bg-background">
      <div className='container mx-auto md:px-5 px-4 py-3 bg-white rounded-[100px] flex justify-between items-center'>
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className='flex md:w-[128px] h-[52px] justify-center items-center'>
            <Image src="/images/logo.png" alt='logo' width={45} height={57} />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className={` lg:flex-row flex-col gap-6 lg:static lg:bg-transparent ${mblMenu ? "flex absolute bg-background left-0 right-0 p-5 top-[100px]" : "lg:flex hidden"}`}>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
              //  onMouseEnter={() => setHovered(item.name)}
             //   onMouseLeave={() => setHovered(null)}
              >
                <Link href={item.href} className="hover:text-secondary transition text-lg font-medium">
                  {item.name}
                </Link>
                {item.submenu && (
                  <FaChevronDown className="inline-block ml-1 w-3 h-3 text-black group-hover:text-secondary" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Search + Contact */}
        <div className="flex items-center space-x-4">
          <button className="bg-secondary rounded-full text-white hover:bg-primary md:w-[52px] w-[32px] md:h-[52px] h-[32px] flex items-center justify-center">
            <FaSearch className="md:text-xl text-lg" />
          </button>
          <button
            onClick={() => setmblMenu(!mblMenu)}
            className='lg:hidden flex text-2xl'>
            {!mblMenu ?
              <FaBars /> : <IoClose />
            }
          </button>
          <Link
            href="/contact"
            className="bg-primary hover:bg-secondary text-xl font-semibold text-white px-5 py-3 rounded-lg md:inline-flex hidden"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
