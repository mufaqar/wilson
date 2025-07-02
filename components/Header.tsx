"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface SubMenuItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About Us",
    href: "#",
    submenu: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Mission & Values", href: "/about/mission-values" },
    ],
  },
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Mission & Values", href: "/about/mission-values" },
    ],
  },
  {
    name: "Industries We Serve",
    href: "#",
    submenu: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Mission & Values", href: "/about/mission-values" },
    ],
  },
  { name: "Career", href: "/career" },
];

export default function Header() {
  // const [hovered, setHovered] = useState<string | null>(null);
  const [mblMenu, setmblMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="p-8 bg-background">
      <div className="container mx-auto md:px-5 px-4 py-3 bg-white rounded-[100px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex md:w-[128px] h-[52px] justify-center items-center"
          >
            <Image src="/images/logo.png" alt="logo" width={45} height={57} />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul
            className={` lg:flex-row flex-col md:gap-6 gap-0 lg:static lg:bg-transparent ${mblMenu
              ? "flex absolute bg-background left-0 right-0 p-5 top-[100px]"
              : "lg:flex hidden"
              }`}
          >
            {menuItems.map((item) => {
              const isSubmenuOpen = activeSubmenu === item.name;

              return (
                <li key={item.name} className="relative group list-none">
                  <button
                    onClick={() =>
                      item.submenu
                        ? setActiveSubmenu(isSubmenuOpen ? null : item.name)
                        : setmblMenu(false)
                    }
                    className="px-4 py-2 text-black hover:text-secondary text-lg font-medium flex items-center gap-1 w-full text-left lg:text-center"
                  >
                    {item.name}
                    {item.submenu && <FaChevronDown className="w-3 h-3 mt-1" />}
                  </button>

                  {item.submenu && (
                    <ul
                      className={`
            z-50 transition-all duration-200
            ${mblMenu
                          ? isSubmenuOpen
                            ? 'block relative md:bg-background :md:mt-1 md:pl-4'
                            : 'hidden'
                          : 'md:absolute left-0 top-full mt-2 w-52 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible'}
          `}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-black hover:text-secondary text-lg font-medium transition"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side: Search + Contact */}
        <div className="flex items-center space-x-4">
          <button className="bg-secondary rounded-full text-white hover:bg-primary md:w-[52px] w-[32px] md:h-[52px] h-[32px] flex items-center justify-center">
            <FaSearch className="md:text-xl text-lg" />
          </button>
          <button
            onClick={() => setmblMenu(!mblMenu)}
            className="lg:hidden flex text-2xl"
          >
            {!mblMenu ? <FaBars /> : <IoClose />}
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
