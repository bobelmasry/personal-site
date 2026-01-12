import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-300 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-start">
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <Link href="/reading" className="hover:text-neutral-900">
            Reading
          </Link>
          <Link href="/deep-dives" className="hover:text-neutral-900">
            Deep Dives
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-neutral-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-neutral-600">
          <Link href="/reading" className="hover:text-neutral-900">
            Reading
          </Link>
          <Link href="/deep-dives" className="hover:text-neutral-900">
            Deep Dives
          </Link>
        </div>
      )}
    </nav>
  );
}
