export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  images: string[];
  brand: string;
  category: string;
  count: number;
}
export interface ProductsState {
  products: Product[];
  status: "init" | "loading" | "success" | "error";
  errorMessage: null | string;
}

export interface CartProduct {
  product: Product;
  count: number;
  id: number;
}

export interface CartState {
  cart: CartProduct[];
  quantity: number;
  totalAmount: number;
}
