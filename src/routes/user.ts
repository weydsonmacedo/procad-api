import { Router } from "express";
import { createUser, getUserInformations, updateUser, forgotPassword, resetPassword } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/users", createUser);
routes.get('/users/:id', auth, getUserInformations);
routes.put("/users", auth, updateUser);
routes.post("/forgotPassword", forgotPassword);
routes.post("/resetPassword", resetPassword);

export default routes;
