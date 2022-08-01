import express, { Request, Response } from "express";
import { businessRoutes } from "./business.routes";

const routes = express();

routes.use('/', (req: Request, res: Response) => {
    return res.json({welcome: "Osten Moove API"})
})

routes.use('/business', businessRoutes);

export { routes };