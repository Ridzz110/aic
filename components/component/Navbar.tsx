'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

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
        <img src="/aiclogo1.png" alt="AI Club Logo" width={120} height={120} className="mt-2 transition-transform duration-300 ease-in-out hover:scale-105" />
      </Link>
      <nav className="ml-auto flex gap-6 items-center">
        <Link href="#team" className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-500" prefetch={false}>
          Team
        </Link>
        <Link href="#about" className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-500" prefetch={false}>
          About
        </Link>
        <Link href="#contact" className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-blue-500" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
