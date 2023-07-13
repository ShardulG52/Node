import {
  createNewBookDetailsController,
  deleteBookByAuthorController,
  getAllBooksController,
  getBookByAuthorController,
  getBookByIdController,
} from "../controller/books.js";
import express from "express";
import { validation } from "../validation/books.js";
import { authenticate } from "../middleware/userAuthentication.js";

var booksRouter = express.Router();

booksRouter.get("/", authenticate, getAllBooksController);
booksRouter.get("/author/:authorName", getBookByAuthorController);
booksRouter.get("/:id", getBookByIdController);
booksRouter.delete("/:authorName", deleteBookByAuthorController);
booksRouter.post("/", validation, createNewBookDetailsController);

export default booksRouter;
