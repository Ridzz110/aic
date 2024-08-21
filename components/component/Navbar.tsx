import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <p className=" font-bold text-lg">Islamabad TG</p>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/attractionAndCuisine" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Attractions & Cuisine
        </Link>
        <Link href="/Resources" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Resources
        </Link>
      </nav>
    </header>
  );
}
