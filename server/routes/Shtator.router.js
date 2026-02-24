import express from "express";
import ShtatorController from "../controllers/Shtator.controller.js";

const ShtatorRouter = express.Router();

ShtatorRouter.post("/", ShtatorController.createShtator);

ShtatorRouter.get("/", ShtatorController.getShtators);

ShtatorRouter.get("/:id", ShtatorController.getShtatorById);

ShtatorRouter.put("/:id", ShtatorController.updateShtator);

ShtatorRouter.delete("/:id", ShtatorController.deleteShtator);

export default ShtatorRouter;
