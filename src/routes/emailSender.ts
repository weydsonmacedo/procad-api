import { Router } from "express";
import { sendEmail} from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/email",sendEmail);


export default routes;
