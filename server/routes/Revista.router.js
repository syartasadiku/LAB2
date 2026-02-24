import express from "express";
import RevistaController from "../controllers/Revista.controller.js";

const RevistaRouter = express.Router();

RevistaRouter.post("/", RevistaController.createRevista);

RevistaRouter.get("/", RevistaController.getRevistas);

RevistaRouter.get("/:id", RevistaController.getRevistaById);

RevistaRouter.put("/:id", RevistaController.updateRevista);

RevistaRouter.delete("/:id", RevistaController.deleteRevista);

export default RevistaRouter;
