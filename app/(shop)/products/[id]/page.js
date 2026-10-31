"use client";

import { CartContext } from "@/app/Context/cartContext";
import { ProductService } from "@/app/Services/productservice";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);

        const response = await ProductService.getProductById(Number(id));

        console.log("This is response:", response);

        setProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <main className="min-h-screen bg-[#F7F2EA] px-5 py-12 text-[#292421] md:px-10 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        
        <div className="overflow-hidden bg-[#E9DFD3]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-[600px] w-full object-cover"
          />
        </div>

        
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#702C3B]">
            {product.category}
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-medium">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </p>

          <div className="my-7 border-t border-[#E8DED3]" />

          <p className="text-sm leading-7 text-[#81756D]">
            {product.description}
          </p>

          <button
            onClick={() => {
              addToCart(product);
              router.push("/Cart");
            }}
            className="mt-8 w-full rounded-full bg-[#702C3B] px-6 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-[#54202D]"
          >
            Add to Bag
          </button>

          <button
            onClick={() => router.back()}
            className="mb-8 mt-5 text-sm text-[#81756D] transition hover:text-[#702C3B]"
          >
            ← Back
          </button>

          <p className="mt-8 border-t border-[#E8DED3] pt-5 text-xs leading-6 text-[#81756D]">
            Everyday comfort. Timeless style. Made for your next step.
          </p>
        </div>
      </div>
    </main>
  );
}