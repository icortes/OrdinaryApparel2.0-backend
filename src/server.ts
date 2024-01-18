import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import prisma from '../prisma/prisma';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

/* Middleware */
app.use(express.json());

/* API Routes */

//GET all Products
app.get('/api/products', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({});
    console.log('products: ', products);
    res.status(200).send({ products });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running on port ${port} 🚀.`);
});
