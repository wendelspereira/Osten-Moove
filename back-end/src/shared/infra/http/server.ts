import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import { routes } from "./routes";
import cors from "cors";
import error from "./middlewares/error";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

app.listen(process.env.PORT, () => console.log("Server is running!"));
