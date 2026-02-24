import express from "express";
import ShtetiController from "../controllers/Shteti.controller.js";

const ShtetiRouter = express.Router();

ShtetiRouter.post("/", ShtetiController.createShteti);

ShtetiRouter.get("/", ShtetiController.getShtetis);

ShtetiRouter.get("/:id", ShtetiController.getShtetiById);

ShtetiRouter.put("/:id", ShtetiController.updateShteti);

ShtetiRouter.delete("/:id", ShtetiController.deleteShteti);

export default ShtetiRouter;
