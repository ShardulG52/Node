import {
  getAllBooks,
  getBookByAuthor,
  deleteBookByAuthor,
  createNewBookDetails,
} from "../service/books.js";

const getAllBooksController = async (req, res) => {
  const allBooks = await getAllBooks();
  res.send(allBooks);
};

const getBookByAuthorController = async (req, res) => {
  const { authorName } = req.params;
  const desiredBook = await getBookByAuthor(authorName);
  res.send(desiredBook);
};

const deleteBookByAuthorController = async (req, res) => {
  const { authorName } = req.params;
  const desiredBookDeletion = await deleteBookByAuthor(authorName);
  res.send(desiredBookDeletion);
};

const createNewBookDetailsController = async (req, res) => {
  const newBookDetails = req.body;
  const afterCreate = await createNewBookDetails(newBookDetails);
  res.send(afterCreate);
};

export {
  getAllBooksController,
  getBookByAuthorController,
  deleteBookByAuthorController,
  createNewBookDetailsController,
};
