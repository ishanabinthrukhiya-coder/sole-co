"use client";

import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#F7F2EA] text-[#292421]">
    
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#702C3B]">
            OUR STORY
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
            Every step tells a story.
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#81756D]">
            At SOLE & CO., we believe great style begins from the ground up.
            We bring together timeless sneaker designs, everyday comfort,
            and effortless style for wherever life takes you.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block bg-[#702C3B] px-8 py-4 text-xs uppercase tracking-widest text-white transition hover:bg-[#57212E]"
          >
            Explore our collection →
          </Link>
        </div>

        <div className="flex min-h-[350px] items-center justify-center bg-[#E8DED3] p-8 md:min-h-[480px]">
          <img
            src="/images/ab.jpg"
            alt="Minimal neutral sneaker collection"
            className="h-full max-h-[440px] w-full object-cover"
          />
        </div>
      </section>

      
      <section className="border-y border-[#E8DED3] bg-[#EFE6DC] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#702C3B]">
            WHAT WE BELIEVE
          </p>

          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Less noise. More style.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-xl">Timeless Design</h3>
              <p className="mt-3 text-sm leading-7 text-[#81756D]">
                Classic silhouettes and versatile styles that never feel
                out of place.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl">Everyday Comfort</h3>
              <p className="mt-3 text-sm leading-7 text-[#81756D]">
                Sneakers selected to complement your everyday routine.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl">Your Individual Style</h3>
              <p className="mt-3 text-sm leading-7 text-[#81756D]">
                Find a pair that feels like you, from understated neutrals
                to bold streetwear.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-5 py-16 text-center md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#702C3B]">
          FIND YOUR NEXT FAVOURITE
        </p>

        <h2 className="mt-4 font-serif text-3xl md:text-5xl">
          Your journey starts here.
        </h2>

        <Link
          href="/products"
          className="mt-7 inline-block border-b border-[#702C3B] pb-2 text-xs uppercase tracking-widest text-[#702C3B]"
        >
          Shop sneakers →
        </Link>
      </section>
    </main>
  );
}