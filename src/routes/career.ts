import { Router } from "express";
import { getCareers } from "../controllers";

const routes = Router();

routes.get("/career", getCareers);

export default routes;
