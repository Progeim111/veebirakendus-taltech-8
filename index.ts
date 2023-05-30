import express, { Express, Request, Response } from "express";

import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productListController from "./controllers/productlist";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productListController);

app.listen(3006,() => {
    console.log(`[server]: Server is running at http://localhost:3006`);
});