import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`[server]: Server is running on port ${port} 🚀.`);
});
