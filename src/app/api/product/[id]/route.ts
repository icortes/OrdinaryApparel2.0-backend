import { Product } from '@/lib/interfaces';
import prisma from '../../../../../prisma/prisma';

export async function GET(request: Request, { params }: { params: { id: number } }) {
  try {
    const product: Product | null = await prisma.product.findUnique({
      where: {
        id: params.id,
      },
    });
    if (product) {
      const formattedProduct = { ...product, id: Number(product.id) };
      console.log('product: ', product);
      return Response.json({ products: formattedProduct });
    } else {
      return Response.json(
        {
          message: 'Product not found!',
          status: 404,
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    return Response.json({ error });
  }
}
