import { Router } from "express";
import { getRoles } from "../controllers";

const routes = Router();

routes.get("/roles", getRoles);

export default routes;
