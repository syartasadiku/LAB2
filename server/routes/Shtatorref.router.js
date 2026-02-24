import express from "express";
import ShtatorrefController from "../controllers/Shtatorref.controller.js";

const ShtatorrefRouter = express.Router();

ShtatorrefRouter.post("/", ShtatorrefController.createShtatorref);

ShtatorrefRouter.get("/", ShtatorrefController.getShtatorrefs);

ShtatorrefRouter.get("/:id", ShtatorrefController.getShtatorrefById);

ShtatorrefRouter.put("/:id", ShtatorrefController.updateShtatorref);

ShtatorrefRouter.delete("/:id", ShtatorrefController.deleteShtatorref);

export default ShtatorrefRouter;
