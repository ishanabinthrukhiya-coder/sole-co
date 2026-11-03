const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export class ProductService {
  static async getProducts() {
    const response = await fetch(
      `${BASE_URL}/api/products`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  }

  static async getProductById(id) {
    const response = await fetch(
      `${BASE_URL}/api/products/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return response.json();
  }
}