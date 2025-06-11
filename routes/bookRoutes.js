const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  createBook,
  getBooks,
  getBookById,
  searchBooks,
} = require("../controllers/bookController");
const { submitReview } = require("../controllers/reviewController");

router.post("/", auth, createBook);
router.get("/", getBooks);
router.get("/search", searchBooks);
router.get("/:id", getBookById);
router.post("/:id/reviews", auth, submitReview);

module.exports = router;
