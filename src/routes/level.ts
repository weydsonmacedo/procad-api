import { Router } from "express";
import { getLevels } from "../controllers";

const routes = Router();

routes.get("/level", getLevels);

export default routes;
