import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const booksModel = mongoose.model("Books", bookSchema);

export { booksModel };
