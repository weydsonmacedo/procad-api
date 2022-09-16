import { Router } from "express";
import { createActivity, getActivitiesFromField } from "../controllers";

import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/activity", auth, createActivity);
routes.get("/field/:id/activities", getActivitiesFromField);

export default routes;
