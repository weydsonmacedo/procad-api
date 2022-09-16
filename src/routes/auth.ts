import { Router } from "express";
import { login } from "../controllers/auth";

const routes = Router();

routes.post("/login", login);

export default routes;
