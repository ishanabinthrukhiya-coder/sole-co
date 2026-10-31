
"use client";

import { useState } from "react";
import ProductCard from "./Productcard";
import Navbar from "./Navbar";

export default function ProductSearch({ products,category,limit,color}) {
  const [search, setSearch] = useState("");

  let filteredProducts = products;

 if (category) {
  filteredProducts = filteredProducts.filter(
    (prod) =>
      prod.category.toLowerCase() === category.toLowerCase()
  );
}

  if (search) {
    filteredProducts = filteredProducts.filter(
      (prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(
      0,
      Number(limit)
    );
  }
  if (color){
    filteredProducts=filteredProducts.filter(
      (prod)=>
        prod.color.toLoweCase() === category.toLoweCase()
    );
  }

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <main className="min-h-screen bg-[#F7F2EA]">
        <section className="mx-auto max-w-[1440px] px-5 py-12 md:px-10">
          <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        
        </section>
      </main>
    </>
  );
}
