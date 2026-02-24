import express from "express";
import BotuesiController from "../controllers/Botuesi.controller.js";

const BotuesiRouter = express.Router();

BotuesiRouter.post("/", BotuesiController.createBotuesi);

BotuesiRouter.get("/", BotuesiController.getBotuesis);

BotuesiRouter.get("/:id", BotuesiController.getBotuesiById);

BotuesiRouter.put("/:id", BotuesiController.updateBotuesi);

BotuesiRouter.delete("/:id", BotuesiController.deleteBotuesi);

export default BotuesiRouter;
