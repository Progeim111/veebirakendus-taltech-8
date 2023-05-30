import { Request, Response, Router } from "express";
import axios from "axios";

const router: Router = Router();

router.get("/nord-pool-price", async (req: Request, res: Response) => {

    res.json("TEST");
});

export default router;