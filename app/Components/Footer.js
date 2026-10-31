
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#292421] px-5 py-10 text-[#F7F2EA] md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl tracking-wide">
            SOLE & CO.
          </h2>

          <p className="mt-2 text-sm text-[#C8BDB2]">
            Classic styles. Modern steps.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm text-[#E8DED3]">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <Link href="/products" className="transition hover:text-white">
            Sneakers
          </Link>

          <Link href="/about-us" className="transition hover:text-white">
            About Us
          </Link>

          <Link href="/contact-us" className="transition hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-xs text-[#C8BDB2]">
    SOLE & CO. All rights reserved.
      </div>
    </footer>
  );
}