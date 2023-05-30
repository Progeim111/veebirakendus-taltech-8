import express, { Express, Request, Response } from "express";

const app: Express = express();

import stringsController from "./controllers/strings";


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);


app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});