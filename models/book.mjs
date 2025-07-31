import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [50, "Book title can not be more than 60 character"],
  },

  Author: {
    type: String,
    required: [true, "Book Author is required"],
    trim: true,
    maxLength: [50, "Book Author can not be more than 60 character"],
  },

  Year: {
    type: Number,
    required: [true, "Publication year is required"],
    min: [1900, "Year must be at least 10 character"],
    max: [new Date().getFullYear(), "Year can not be in the future"],
    createdAt: { type: Date, default: Date.now },
  },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
