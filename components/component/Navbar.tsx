'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import AIC from '../../app/assests/AIC logo png-01.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full px-6 h-16 flex items-center justify-between shadow-md z-50 transition-transform duration-300 ease-in-out ${scrolled ? 'bg-white text-gray-900' : 'bg-transparent text-white'}`}>
      <Link href="/" prefetch={false}>
        <Image src={AIC} alt="aic logo" height={120} width={120}/>
      </Link>
      <nav className="ml-auto flex gap-6 items-center">
        <Link href="/Team" className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-customBlue" prefetch={false}>
          Team
        </Link>
        <Link href="#about" className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-customBlue" prefetch={false}>
          About
        </Link>
        <Link href="#contact" className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-customBlue" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
