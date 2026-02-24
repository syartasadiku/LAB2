import express from "express";
import AutoriController from "../controllers/Autori.controller.js";

const AutoriRouter = express.Router();

AutoriRouter.post("/", AutoriController.createAutori);

AutoriRouter.get("/", AutoriController.getAutoris);

AutoriRouter.get("/:id", AutoriController.getAutoriById);

AutoriRouter.put("/:id", AutoriController.updateAutori);

AutoriRouter.delete("/:id", AutoriController.deleteAutori);

export default AutoriRouter;