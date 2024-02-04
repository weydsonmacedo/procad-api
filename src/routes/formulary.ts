import { Router } from "express";
import {
  closeFormulary,
  createFormulary,
  getFormulariesByUser,
  getFormularyInformations,
  upsertFormularyAnswer,
  deleteFormulary,
  deleteFormularyAnswer,
  updateFormulary,
} from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/formulary", auth, createFormulary);
routes.put("/formulary/:id", updateFormulary);
routes.put("/formularyAnswer", auth, upsertFormularyAnswer);
routes.get("/formulary/:id", auth, getFormularyInformations);
routes.get("/formularies", auth, getFormulariesByUser);
routes.post("/formulary/:id/close", auth, closeFormulary);
routes.delete("/formulary/:id", auth, deleteFormulary);
routes.delete("/formularyAnswer/:formularyId/:id", auth, deleteFormularyAnswer);

export default routes;
