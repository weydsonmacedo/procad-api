import cors from "cors";
import express from "express";
import helmet from "helmet";
import knex from "./knex";
import { globalErrorHandler, urlNotFoundHandler } from "./middlewares/error";
import { config } from "./middlewares/knex";
import routes from "./router";

// middleware definitions in app

const app = express();

app.get("/", (_, res) => {
  res.status(200).json({ version: 1 }).end();
});

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "20mb" }));
app.use(config(knex));
app.use(routes);
app.use(urlNotFoundHandler);
app.use(globalErrorHandler);

export default app;
