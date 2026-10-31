
import Link from "next/link";
import Navbar from "./Components/Navbar";


const collections = [
  {
    title: "Everyday Classics",
    subtitle: "Timeless shapes. Effortless styling.",
    image: "/images/main1.jpg",
    category: "classic",
  },
  {
    title: "Soft Neutrals",
    subtitle: "Easy colours. Everyday comfort.",
    image: "/images/main3.jpg",
    category: "casual",
  },
  {
    title: "Street Essentials",
    subtitle: "Relaxed fits. Modern energy.",
    image: "/images/main2.jpg",
    category: "streetwear",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F7F2EA] text-[#292421]">
        {/* Hero */}
        
{/* Full Image Banner */}
<section className="relative h-[520px] w-full overflow-hidden md:h-[730px]">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hero.png')" }}
  />

 
</section>


        {/* Collections */}
        <section className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#702C3B]">
                Find your style
              </p>

              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                Shop the collections
              </h2>
            </div>

            <Link
              href="/products"
              className="shrink-0 border-b border-[#702C3B] pb-1 text-[10px] uppercase tracking-widest text-[#702C3B]"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((item) => (
              <Link
                key={item.category}
                href={`/products?category=${item.category}`}
                className="group"
              >
                <div className="overflow-hidden bg-[#E9DFD3]">
                  <div
                    role="img"
                    aria-label={item.title}
                    className="aspect-[4/4.5] bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                </div>

                <div className="flex items-start justify-between gap-3 pt-4">
                  <div>
                    <h3 className="font-serif text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#81756D]">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="pt-1 text-lg text-[#702C3B] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

       
      </main>
    </>
  );
}
