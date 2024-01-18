export interface Product {
  id: bigint | number;
  name: string;
  description?: string | null;
  price: number;
  image: string;
  stock: number | null;
  createdAt: Date;
  updatedAt: Date;
}
