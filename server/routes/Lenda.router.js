import express from "express";
import LendaController from "../controllers/Lenda.controller.js";

const LendaRouter = express.Router();

LendaRouter.post("/", LendaController.createLenda);

LendaRouter.get("/", LendaController.getLendet);

LendaRouter.get("/:id", LendaController.getLendetById);

LendaRouter.put("/:id", LendaController.updateLenda);

LendaRouter.delete("/:id", LendaController.deleteLenda);

export default LendaRouter;
