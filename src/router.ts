import { Router } from "express";

import {
  academicDegreeRoutes,
  activityRoutes,
  authRoutes,
  careerRoutes,
  fieldRoutes,
  formularyRoutes,
  levelRoutes,
  nationalityRoutes,
  roleRoutes,
  userRoutes,
} from "./routes";

// routes

const routes = Router();

routes.use(academicDegreeRoutes);
routes.use(activityRoutes);
routes.use(authRoutes);
routes.use(careerRoutes);
routes.use(fieldRoutes);
routes.use(formularyRoutes);
routes.use(levelRoutes);
routes.use(nationalityRoutes);
routes.use(roleRoutes);
routes.use(userRoutes);

export default routes;
