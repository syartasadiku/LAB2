import express from "express";
import SkuadraController from "../controllers/Skuadra.controller.js";

const SkuadraRouter = express.Router();

SkuadraRouter.post("/", SkuadraController.createSkuadra);

SkuadraRouter.get("/", SkuadraController.getSkuadras);

SkuadraRouter.get("/:id", SkuadraController.getSkuadraById);

SkuadraRouter.put("/:id", SkuadraController.updateSkuadra);

SkuadraRouter.delete("/:id", SkuadraController.deleteSkuadra);

export default SkuadraRouter;