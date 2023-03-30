import { Router } from "express";
import { getAcademicDegrees } from "../controllers";

const routes = Router();

routes.get("/academicDegree", getAcademicDegrees);

export default routes;
