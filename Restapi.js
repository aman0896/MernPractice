const express = require("express");
const router = express.Router(); // router initialize, class to create modular, mountable route handlers

const movieSchema = require("./DBConnect/DBModel/Movie");

//get movies from db
router.get("/list", async (req, res) => {
  const data = await movieSchema.find();
  console.log(data, "data");
  res.json(data);
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
