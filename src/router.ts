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
  emailSenderRoutes,
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
routes.use(emailSenderRoutes);

export default routes;
