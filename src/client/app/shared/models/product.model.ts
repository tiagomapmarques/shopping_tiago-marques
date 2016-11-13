export interface ProductDiscount {
  amount: number;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  discount?: ProductDiscount;
}
