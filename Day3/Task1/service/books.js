import fs from "fs/promises";
import _ from "lodash";

/* GET users listing. */
const getAllBooks = async () => {
  try {
    const books = await fs.readFile(
      "/Users/shardulg/Desktop/Node/Day3/Task1/books.json"
    );
    return JSON.parse(books);
  } catch (error) {
    return error.message;
  }
};

const getBookByAuthor = async (author) => {
  try {
    const books = await getAllBooks();
    const bookFound = _.find(books, (book) => book.author == author);
    if (bookFound) {
      return bookFound;
    } else {
      throw new Error("Book of given author is  Not Found ");
    }
  } catch (error) {
    return error.message;
  }
};

const deleteBookByAuthor = async (author) => {
  try {
    const books = await getAllBooks();
    const bookFound = _.find(books, (book) => book.author == author);
    if (bookFound) {
      const afterDeletionRecord = _.filter(
        books,
        (book) => book.author != author
      );
      await fs.writeFile(
        "/Users/shardulg/Desktop/Node/Day3/Task1/books.json",
        JSON.stringify(afterDeletionRecord)
      );
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
    const books = await getAllBooks();
    books.push(newBookDetails);
    await fs.writeFile(
      "/Users/shardulg/Desktop/Node/Day3/Task1/books.json",
      JSON.stringify(books)
    );
    return books;
  } catch (error) {
    return error.message;
  }
};

export {
  getAllBooks,
  getBookByAuthor,
  deleteBookByAuthor,
  createNewBookDetails,
};
