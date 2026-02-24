import express from "express";
import ExpeditionController from "../controllers/Expedition.controller.js";

const ExpeditionRouter = express.Router();

ExpeditionRouter.post("/", ExpeditionController.createExpedition);

ExpeditionRouter.get("/", ExpeditionController.getExpeditions);

ExpeditionRouter.get("/:id", ExpeditionController.getExpeditionById);

ExpeditionRouter.put("/:id", ExpeditionController.updateExpedition);

ExpeditionRouter.delete("/:id", ExpeditionController.deleteExpedition);

export default ExpeditionRouter;
