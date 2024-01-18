import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import prisma from '../prisma/prisma';
import { Product } from './lib/interfaces';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

/* Middleware */
app.use(express.json());

/* API Routes */

//GET all Products
app.get('/api/products', async (req: Request, res: Response) => {
  try {
    const products: Product[] = await prisma.product.findMany({});

    const formattedProducts: Product[] = products.map(
      (product): Product => ({
        ...product,
        id: Number(product.id),
      })
    );
    console.log('products: ', products);
    res.status(200).send({ products: formattedProducts });
  } catch (error) {
    res.status(500).send({ error });
  }
});

//GET product by id
app.get('/api/product/:id', async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    const product: Product | null = await prisma.product.findUnique({
      where: { id },
    });
    if (product) {
      const formattedProduct = { ...product, id: Number(product.id) };
      res.status(200).send({ product: formattedProduct });
    } else {
      res.status(404).send({ error: 404, message: 'Product not found!' });
    }
  } catch (error) {}
});

//POST Product
app.post('/api/product', async (req: Request, res: Response) => {
  try {
    const body: Product = req.body;
    const product: Product = await prisma.product.create({
      data: { ...body },
    });

    const formattedProduct: Product = { ...product, id: Number(product.id) };

    console.log('product: ', formattedProduct);
    res.status(200).send({ product: formattedProduct });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running on port ${port} 🚀.`);
});
