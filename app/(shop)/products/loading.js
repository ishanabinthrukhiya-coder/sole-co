
export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F7F2EA] px-6 py-16">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl">
        <div className="h-3 w-32 animate-pulse rounded bg-[#E8DED3]"></div>

        <div className="mt-5 h-10 w-64 animate-pulse rounded bg-[#E8DED3]"></div>

        <div className="mt-4 h-4 w-80 max-w-full animate-pulse rounded bg-[#E8DED3]"></div>
      </div>

      {/* Product skeletons */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">

        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item}>

            {/* Image placeholder */}
            <div className="aspect-square animate-pulse rounded-lg bg-[#E8DED3]"></div>

            {/* Product name */}
            <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-[#E8DED3]"></div>

            {/* Price */}
            <div className="mt-3 h-4 w-1/3 animate-pulse rounded bg-[#E8DED3]"></div>

          </div>
        ))}

      </div>

      {/* Loading message */}
      <p className="mt-14 text-center text-sm tracking-[0.2em] text-[#702C3B]">
        FINDING YOUR PERFECT PAIR...
      </p>

    </div>
  );
}
