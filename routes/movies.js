const express = require("express");
const movieRouter = express.Router(); // router initialize, class to create modular, mountable route handlers

const movieSchema = require("../DBConnect/DBModel/Movie");

//get movies from db
movieRouter.get("/list", async (req, res) => {
  const data = await movieSchema.find();
  console.log(data, "data");
  res.json(data);
});

//get movie by id, Model.findOne()
movieRouter.get("/list/:name", async (req, res) => {
  const movieName = req.params.name;
  try {
    const data = await movieSchema.findOne({ name: movieName });
    if (data) {
      return res.json(data);
    } else {
      return res.json({ msg: "could not find movie" });
    }
  } catch (error) {
    console.log(error, "error");
    res.json({ msg: "movie not found" });
  }
});

//Add movies or Create
movieRouter.post("/add", (req, res) => {
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

module.exports = movieRouter;
