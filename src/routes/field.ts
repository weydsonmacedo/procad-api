import { Router } from "express";
import { createField, getFields } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/field", auth, createField);
routes.get("/fields", auth, getFields);

export default routes;
