import express from "express";
import FestivaliController from "../controllers/Festivali.controller.js";

const FestivaliRouter = express.Router();

FestivaliRouter.post("/", FestivaliController.createFestivali);

FestivaliRouter.get("/", FestivaliController.getFestivalis);

FestivaliRouter.get("/:id", FestivaliController.getFestivaliById);

FestivaliRouter.put("/:id", FestivaliController.updateFestivali);

FestivaliRouter.delete("/:id", FestivaliController.deleteFestivali);

export default FestivaliRouter;
