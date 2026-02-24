import express from "express";
import PlanetController from "../controllers/Planet.controller.js";

const PlanetRouter = express.Router();

PlanetRouter.post("/", PlanetController.createPlanet);

PlanetRouter.get("/", PlanetController.getPlanets);

PlanetRouter.get("/:id", PlanetController.getPlanetById);

PlanetRouter.put("/:id", PlanetController.updatePlanet);

PlanetRouter.delete("/:id", PlanetController.deletePlanet);

export default PlanetRouter;
