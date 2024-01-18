import { Product } from '@/lib/interfaces';
import prisma from '../../../../prisma/prisma';

export async function GET(request: Request) {
  try {
    const products: Product[] = await prisma.product.findMany({});

    const formattedProducts: Product[] = products.map(
      (product): Product => ({
        ...product,
        id: Number(product.id),
      })
    );
    console.log('products: ', products);
    return Response.json({ products: formattedProducts });
  } catch (error) {
    return Response.json({ error });
  }
}
