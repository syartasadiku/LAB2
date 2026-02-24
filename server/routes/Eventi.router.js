import express from "express";
import EventiController from "../controllers/Eventi.controller.js";

const EventiRouter = express.Router();

EventiRouter.post("/", EventiController.createEventi);

EventiRouter.get("/", EventiController.getEventis);

EventiRouter.get("/:id", EventiController.getEventiById);

EventiRouter.put("/:id", EventiController.updateEventi);

EventiRouter.delete("/:id", EventiController.deleteEventi);

export default EventiRouter;

