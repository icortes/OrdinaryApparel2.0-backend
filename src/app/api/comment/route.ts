import prisma from '../../../../prisma/prisma';
import { Comment } from '@/lib/interfaces';

export async function POST(request: Request) {
  try {
    const body: Comment = await request.json();
    console.log(body);
    const newComment: Comment = await prisma.comment.create({
      data: {
        ...body,
      },
    });

    const formattedComment = {
      ...newComment,
      id: Number(newComment.id),
      productId: Number(newComment.productId),
    };
    console.log(formattedComment);

    return Response.json({ comment: formattedComment });
  } catch (error) {
    return Response.json({ error });
  }
}
