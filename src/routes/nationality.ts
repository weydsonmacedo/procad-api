import { Router } from "express";
import { getNationalities } from "../controllers";

const routes = Router();

routes.get("/nationality", getNationalities);

export default routes;
