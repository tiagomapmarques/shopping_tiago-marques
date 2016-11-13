export interface ProductDiscount {
  amount: number;
  price: number;
}

export interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  discount?: ProductDiscount;
}
