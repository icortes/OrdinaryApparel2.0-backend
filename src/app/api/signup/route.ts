import prisma from '../../../../prisma/prisma';
import * as jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';
import { User } from '@/lib/interfaces';
import { NextRequest, NextResponse } from 'next/server';

declare var process: {
  env: {
    TOKEN_SECRET: string;
  };
};

export async function POST(req: NextRequest) {
  try {
    const res = new NextResponse();
    const body = await req.json();
    const userExist: User | null = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (userExist)
      return Response.json({ message: 'Email already in use!' }, { status: 418 });

    const user: User = await prisma.user.create({
      data: { ...body },
    });

    const token = jwt.sign({ email: body.email }, process.env.TOKEN_SECRET, {
      expiresIn: '1d',
    });
    console.log(token);

    setCookie('token', token, {
      req,
      res,
      maxAge: 60 * 60 * 24, // 1day
      path: '/',
    });
    return Response.json({ user }, { status: 201 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
