import express from "express";
import SatelitController from "../controllers/Satelit.controller.js";

const SatelitRouter = express.Router();

SatelitRouter.post("/", SatelitController.createSatelit);

SatelitRouter.get("/", SatelitController.getSatelits);

SatelitRouter.get("/:id", SatelitController.getSatelitById);

SatelitRouter.put("/:id", SatelitController.updateSatelit);

SatelitRouter.delete("/:id", SatelitController.deleteSatelit);

export default SatelitRouter;
