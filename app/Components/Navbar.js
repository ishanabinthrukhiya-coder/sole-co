
"use client";

import Link from "next/link";
import { useContext } from "react";

import { CartContext } from "@/app/Context/cartContext";

export default function Navbar({ search, setSearch }) {
  const { cart } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DED3] bg-[#F7F2EA]/95">

      {/* Announcement */}
      <div className="bg-[#702C3B] px-4 py-2 text-center text-xs tracking-widest text-[#F7F2EA]">
        TIMELESS STYLE, EVERYDAY COMFORT
      </div>

      {/* Navbar */}
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">

        {/* Navigation links */}
        <nav className="flex items-center gap-3 text-xs md:gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Sneakers</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact</Link>
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="hidden text-lg font-semibold tracking-[0.2em] text-[#702C3B] sm:block"
        >
          SOLE & CO.
        </Link>

        {/* Search and cart */}
        <div className="flex items-center gap-3 md:gap-6">
          <input
            type="search"
            placeholder="Search sneakers..."
            aria-label="Search sneakers"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-24 border-b border-[#DCCBB8] bg-transparent py-2 text-xs outline-none focus:border-[#702C3B] sm:w-36"
          />

          {/* Cart icon and item count */}
          <Link
            href="/Cart"
            aria-label={`Shopping cart with ${cart.length} items`}
            className="relative text-[#702C3B] transition hover:opacity-70"
          >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 8h14l1 13H4L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>

            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#702C3B] px-1 text-[10px] text-white">
                {cart.length}
              </span> 
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
