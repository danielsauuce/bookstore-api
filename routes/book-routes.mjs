import express from "express";
import bookController from "../controllers/book-controller.mjs";

const router = express.Router();

// BOOK ROUTES
router.get("/get", bookController.getAllBooks);
router.get("/get/:id", bookController.getSingleBookById);
router.post("/add", bookController.addNewBook);
router.put("/update/:id", bookController.updateBook);
router.delete("/delete/:id", bookController.deleteBook);

export default router;
