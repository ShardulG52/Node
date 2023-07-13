import _ from "lodash";
import { booksModel } from "../Models/books.js";

/* GET users listing. */
const getAllBooks = async () => {
  try {
    const books = await booksModel.find();
    return books;
  } catch (error) {
    return error.message;
  }
};

const getBookByAuthor = async (authorName) => {
  try {
    const bookFound = await booksModel.find({ author: authorName });
    if (bookFound.length) {
      return bookFound;
    } else {
      throw new Error("Book of given author is  Not Found ");
    }
  } catch (error) {
    return error.message;
  }
};

const getBookById = async (id) => {
  try {
    const bookFound = await booksModel.findById(id);
    if (bookFound) {
      return bookFound;
    } else {
      throw new Error("Book of given Id is  Not Found");
    }
  } catch (error) {
    return error.message;
  }
};

const deleteBookByAuthor = async (authorName) => {
  try {
    const bookFound = await booksModel.find({ author: authorName });
    if (bookFound.length) {
      const afterDeletionRecord = await booksModel.deleteOne({
        author: authorName,
      });

      return afterDeletionRecord;
    } else {
      throw new Error("Book of given author is  Not Found ");
    }
  } catch (error) {
    return error.message;
  }
};

const createNewBookDetails = async (newBookDetails) => {
  try {
    const booksCreate = await booksModel.create(newBookDetails);
    return booksCreate;
  } catch (error) {
    return error.message;
  }
};

export {
  getAllBooks,
  getBookByAuthor,
  deleteBookByAuthor,
  createNewBookDetails,
  getBookById,
};
