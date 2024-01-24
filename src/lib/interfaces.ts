export interface Product {
  id: bigint | number;
  name: string;
  description: string | null;
  comments?: Comment[];
  price: number;
  image: string;
  stock: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: bigint | number;
  text: string;
  name: string;
  productId: bigint | number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: bigint;
  name: String;
  email: String;
  password: String;
}
