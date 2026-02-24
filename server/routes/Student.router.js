import express from "express";
import StudentController from "../controllers/Student.controller.js";

const StudentRouter = express.Router();

StudentRouter.post("/", StudentController.createStudent);

StudentRouter.get("/", StudentController.getStudents);

StudentRouter.get("/:id", StudentController.getStudentById);

StudentRouter.put("/:id", StudentController.updateStudent);

StudentRouter.delete("/:id", StudentController.deleteStudent);

export default StudentRouter;
