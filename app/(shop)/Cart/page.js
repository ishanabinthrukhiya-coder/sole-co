"use client";

import { useContext } from "react";
import { CartContext } from "@/app/Context/cartContext";
import Link from "next/link";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
    
    <main className="min-h-screen bg-[#F7F2EA] px-5 py-12 text-[#292421] md:px-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        
        <div className="mb-10 border-b border-[#E8DED3] pb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#702C3B]">
            SOLE & CO.
          </p>

          <h1 className="mt-3 font-serif text-4xl md:text-5xl">
            Your Shopping Bag
          </h1>

          <p className="mt-3 text-sm text-[#81756D]">
            Your everyday favourites, all in one place.
          </p>
        </div>

        
        {cart.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="font-serif text-2xl">
              Your bag is waiting.
            </h2>

            <p className="mt-3 text-sm text-[#81756D]">
              You haven't added any sneakers yet.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-block bg-[#702C3B] px-7 py-4 text-xs uppercase tracking-widest text-white transition hover:bg-[#57212E]"
            >
              Explore sneakers →
            </Link>
          </div>
        ) : (
          
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex flex-col gap-5 border-b border-[#E8DED3] pb-6 sm:flex-row"
              >
                <div className="h-44 w-full shrink-0 overflow-hidden bg-[#E9DFD3] sm:h-40 sm:w-40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#81756D]">
                      {item.category}
                    </p>

                    <h2 className="mt-2 font-serif text-xl">
                      {item.name}
                    </h2>

                    <p className="mt-3 font-medium">
                      ₹{Number(item.price).toLocaleString("en-IN")}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="shrink-0 border-b border-[#702C3B] pb-1 text-xs text-[#702C3B] transition hover:text-[#292421]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            
            <div className="flex flex-col items-start justify-between gap-5 pt-5 sm:flex-row sm:items-center">
              <Link
                href="/products"
                className="text-xs uppercase tracking-widest text-[#702C3B] underline underline-offset-4"
              >
                ← Continue shopping
              </Link>

              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-widest text-[#81756D]">
                  Subtotal
                </p>

                <p className="mt-2 font-serif text-3xl">
                  ₹
                  {cart
                    .reduce(
                      (total, item) => total + Number(item.price),
                      0
                    )
                    .toLocaleString("en-IN")}
                </p>

                <p className="mt-2 text-xs text-[#81756D]">
                  Shipping calculated at checkout.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main></>
  );
}

export default Cart;