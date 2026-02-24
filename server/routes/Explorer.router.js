import express from "express";
import ExplorerController from "../controllers/Explorer.controller.js";

const ExplorerRouter = express.Router();

ExplorerRouter.post("/", ExplorerController.createExplorer);

ExplorerRouter.get("/", ExplorerController.getExplorers);

ExplorerRouter.get("/:id", ExplorerController.getExplorerById);

ExplorerRouter.put("/:id", ExplorerController.updateExplorer);

ExplorerRouter.delete("/:id", ExplorerController.deleteExplorer);

export default ExplorerRouter;
