import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/hello-variable/:nimi", (req: Request, res: Response) => {
    res.send("Hello " + req.params.nimi)
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + req.params.nr2)
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
    for (let index = 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index);
    }
    res.send();
});

router.get("/random/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((Math.floor(Math.random() * (nr2 - nr1 + 1)) + nr1).toString());
});

router.get('/birthday/:paev/:kuu/:aasta', (req: Request, res: Response) => {
    const paev = Number(req.params.paev);
    const kuu = Number(req.params.kuu);
    const aasta = Number(req.params.aasta);
    const today = new Date();
    const birthday = new Date(aasta, kuu - 1, paev);
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    res.send("You are " + age + " years old");

});

export default router;