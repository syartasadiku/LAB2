import express from "express";
import DepartamentController from "../controllers/Departament.controller.js";

const DepartamentRouter = express.Router();

DepartamentRouter.post("/", DepartamentController.createDepartament);

DepartamentRouter.get("/", DepartamentController.getDepartaments);

DepartamentRouter.get("/:id", DepartamentController.getDepartamentById);

DepartamentRouter.put("/:id", DepartamentController.updateDepartament);

DepartamentRouter.delete("/:id", DepartamentController.deleteDepartament);

export default DepartamentRouter;
