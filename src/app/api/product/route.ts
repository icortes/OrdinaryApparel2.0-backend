import { Product } from '@/lib/interfaces';
import prisma from '../../../../prisma/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    const product: Product = await prisma.product.create({
      data: {
        ...body,
      },
    });

    const formattedProduct: Product = { ...product, id: Number(product.id) };

    console.log('product: ', formattedProduct);
    return Response.json({ product: formattedProduct });
  } catch (error) {
    return Response.json({ error });
  }
}
