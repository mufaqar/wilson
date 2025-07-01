'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

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

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="bg-[#F4FBFF] rounded-b-3xl px-6 md:px-14 py-5 flex justify-between items-center shadow">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Navigation */}
      <div className="hidden lg:flex space-x-8 items-center text-sm text-gray-700 font-medium">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link href={item.href} className="hover:text-[#007FB5] transition">
              {item.name}
            </Link>
            {item.submenu && (
              <FaChevronDown className="inline-block ml-1 w-3 h-3 text-gray-500 group-hover:text-[#007FB5]" />
            )}
          </div>
        ))}
      </div>

      {/* Right Side: Search + Contact */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#00AEEF] p-2 rounded-full text-white hover:bg-[#0096d1]">
          <FaSearch className="w-4 h-4" />
        </button>
        <Link
          href="/contact"
          className="bg-[#0C2D4A] hover:bg-[#103a60] text-white text-sm px-5 py-2.5 rounded-lg font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
