const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchProducts(page = 1, limit = 9) {
  const response = await fetch(`${baseUrl}/api/products?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
}

export async function fetchCategory() {
 const response = await fetch(`${baseUrl}/api/products/category`)
 
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();

}