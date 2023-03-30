import { Router } from "express";
import { getAcademicDegrees } from "../controllers";

const routes = Router();

routes.post("/academicDegree", getAcademicDegrees);

export default routes;
