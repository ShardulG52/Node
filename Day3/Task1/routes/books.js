import {
  createNewBookDetailsController,
  deleteBookByAuthorController,
  getAllBooksController,
  getBookByAuthorController,
} from "../controller/books.js";
import express from "express";
import { validation } from "../validation/books.js";

var booksRouter = express.Router();

booksRouter.get("/", getAllBooksController);
booksRouter.get("/:authorName", getBookByAuthorController);
booksRouter.delete("/:authorName", deleteBookByAuthorController);
booksRouter.post("/", validation, createNewBookDetailsController);

export default booksRouter;
