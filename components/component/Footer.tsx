import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-customDarkBlue text-gray-300 py-6 px-4 md:px-6 border-t border-gray-700">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-xs text-gray-400 mb-4 sm:mb-0">
          &copy; 2024 AIC. All rights reserved.
        </p>

        <nav className="flex gap-4 sm:gap-6 mb-4 sm:mb-0">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>

        <div className="flex gap-4 text-gray-400">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
