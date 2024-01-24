# Ordinary Apparel Backend

API routes for [Ordinary Apparel](https://github.com/NicolasFoong/OrdinaryApparel2.0)
## API Routes
### POST /api/product
create a product to be stored in the database
```ts 
  const res : Response = await fetch(apiUri + '/', {
    method: 'POST',
    body: JSON.stringify({ 
      name: "Vtg Warriors Jamison Lighting",
      price: 125,
      image: "https://i.imgur.com/iqLWanE.jpg",
      stock: 1 
    }),
  });
```

### GET /api/product/:id
fetch a single product, with comments, using productId

```ts
  const res: Response = await fetch(apiUri + '/product/' + id);
```

### GET /api/products
fetch all products, no comments
```ts
  const response = await fetch(apiUri + '/products');
```

### POST /api/comment
add a review to a product
```ts
  const res: Response = await fetch(apiUri + '/comment', {
      method: 'POST',
      body: JSON.stringify({ text, name, productId }),
    });
```

## Built With

* [Next](https://nextjs.org/docs)
* [Prisma](https://www.prisma.io/docs/orm/overview/introduction)
* [CockroachDB](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart)
* [Typescript](https://www.typescriptlang.org/docs/)


## Authors

* **Isaac Cortes Hernandez** 

- [Link to Github](https://github.com/icortes)
- [Link to LinkedIn](https://www.linkedin.com/cortes-isaac)

## License

This project is licensed under the MIT License 

