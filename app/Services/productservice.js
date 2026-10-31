
export class ProductService {
  static async getProducts() {
    const response = await fetch(
      "http://localhost:3000/api/products"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  }

  static async getProductById(id) {
    const response = await fetch(
      `http://localhost:3000/api/products/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return response.json();
  }
}

