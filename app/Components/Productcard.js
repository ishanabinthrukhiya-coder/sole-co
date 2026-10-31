
import Link from "next/link";


export default function ProductCard({product}) {
  return (
    <article className="group min-w-0">
      <Link
        href={`/products/${product.id}`}
        className="block"
        prefetch={true}
      >
        <div className="relative aspect-[4/4.5] overflow-hidden bg-[#EEE7DF]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />

          <span className="absolute left-3 top-3 bg-[#F7F2EA] px-2 py-1 text-[10px] uppercase tracking-widest text-[#702C3B]">
            Essential
          </span>
        </div>

        <div className="pt-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#81756D]">
            {product.category}
          </p>
          <h3 className="mt-1 truncate text-sm font-medium">
            {product.name}
          </h3>
          <p className="mt-2 text-sm font-semibold">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </p>
        </div>
      </Link>
    </article>
  );
}
