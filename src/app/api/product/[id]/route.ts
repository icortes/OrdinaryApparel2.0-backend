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

//update description
export async function PUT(request: Request, { params }: { params: { id: number } }) {
  try {
    const body = await request.json();
    const product: Product = await prisma.product.update({
      where: {
        id: params.id,
      },
      data: {
        ...body,
      },
    });
    const formattedProduct = { ...product, id: Number(product.id) };
    console.log('updated product: ', formattedProduct);

    return Response.json({ product: formattedProduct });
  } catch (error) {
    return Response.json({ error });
  }
}
