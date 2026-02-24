import express from "express";
import ProfesoriController from "../controllers/Profesori.controller.js";

const ProfesoriRouter = express.Router();

ProfesoriRouter.post("/", ProfesoriController.createProfesori);

ProfesoriRouter.get("/",ProfesoriController.getProfesors);

ProfesoriRouter.get("/:id", ProfesoriController.getProfesorsById);

ProfesoriRouter.put("/:id", ProfesoriController.updateProfesori);

ProfesoriRouter.delete("/:id", ProfesoriController.deleteProfesori);

export default ProfesoriRouter;