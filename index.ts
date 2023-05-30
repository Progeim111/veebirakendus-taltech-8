import express, { Express, Request, Response } from "express";

import cors from "cors";
import bodyParser from "body-parser";


import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productListController from "./controllers/productlist";
import parcelMachinesController from "./controllers/parcelmachines";
import nordpoolController from "./controllers/nordpool";

const app: Express = express();

app.use(cors())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productListController);
app.use('/', parcelMachinesController);
app.use('/', nordpoolController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});