import express from "express";
import QytetiController from "../controllers/Qyteti.controller.js";

const QytetiRouter = express.Router();

QytetiRouter.post("/", QytetiController.createQyteti);

QytetiRouter.get("/", QytetiController.getQytetis);

QytetiRouter.get("/:id", QytetiController.getQytetiById);

QytetiRouter.put("/:id", QytetiController.updateQyteti);

QytetiRouter.delete("/:id", QytetiController.deleteQyteti);

export default QytetiRouter;
