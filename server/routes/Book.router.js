import express from "express";
import BookController from "../controllers/Book.controller.js";

const BookRouter = express.Router();

BookRouter.post("/", BookController.createBook);

BookRouter.get("/", BookController.getBooks);

BookRouter.get("/:id", BookController.getBookById);

BookRouter.put("/:id", BookController.updateBook);

BookRouter.delete("/:id", BookController.deleteBook);

export default BookRouter;