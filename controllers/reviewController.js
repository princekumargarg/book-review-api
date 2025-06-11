exports.submitReview = async (req, res) => {
  const { rating, comment } = req.body;
  const existing = await Review.findOne({
    user: req.userId,
    book: req.params.id,
  });
  if (existing)
    return res.status(400).json({ message: "Review already exists" });

  const review = await Review.create({
    user: req.userId,
    book: req.params.id,
    rating,
    comment,
  });
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.userId)
    return res.status(403).json({ message: "Unauthorized" });

  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.userId)
    return res.status(403).json({ message: "Unauthorized" });

  await review.remove();
  res.json({ message: "Review deleted" });
};
