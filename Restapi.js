const express = require("express");
const router = express.Router(); // router initialize, class to create modular, mountable route handlers

const movieSchema = require("./DBConnect/DBModel/Movie");

//get movies from db
router.get("/list", async (req, res) => {
  const data = await movieSchema.find();
  console.log(data, "data");
  res.json(data);
});

//get movie by id, Model.findOne()
router.get("/list/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const data = await movieSchema.findOne({ _id: movieId });
    console.log(data, "data");
    if (data) {
      return res.json(data);
    } else {
      return res.json({ msg: "could not find movie" });
    }
  } catch {
    res.json({ msg: "movie not found" });
  }
});

//Add movies
router.post("/add", (req, res) => {
  console.log(req.body, "body");
  const data = new movieSchema(req.body);
  data.save((err, result) => {
    if (err) {
      return res.send(err.message);
    } else {
      return res.json({ message: "Movie Addes Successfully" });
    }
  });
});

module.exports = router;
