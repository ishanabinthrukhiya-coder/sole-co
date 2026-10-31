import ProductSearch from "@/app/Components/Searching";
import { ProductService } from "@/app/Services/productservice";

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const products = await ProductService.getProducts();

  return (
    <ProductSearch
      products={products} 
      category={params.category}
      limit={params.limit}
      color={params.color}
    />
  );
}