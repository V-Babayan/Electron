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
}

export interface CartProduct {
  product: Product;
  count: number;
  id: number;
}

export interface CartState {
  cart: CartProduct[];
  quanity: number;
  totalAmount: number;
}
