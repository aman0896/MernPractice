const express = require("express");
const router = express.Router(); // router initialize, class to create modular, mountable route handlers

const movies = [
  { id: 1, name: "The BucketList", year: "2007" },
  { id: 2, name: "The Matrix", year: "1999" },
  { id: 3, name: "Man on Fire", year: "2004" },
  { id: 4, name: "Hannibal", year: "2001" },
  {
    id: 5,
    name: "Tarzan",
    year: "1999",
  },
  { id: 6, name: "End Game", year: "2007" },
  { id: 7, name: "The Matrix", year: "1999" },
  { id: 8, name: "Man on Fire", year: "2004" },
  { id: 9, name: "Hannibal", year: "2001" },
  {
    id: 10,
    name: "Tarzan",
    year: "1999",
  },
];

//Restful Apis
// get all the list of movies
router.get("/list", (req, res) => {
  console.log(movies.length, "length");
  res.json(movies);
});

// get move by id
router.get("/id/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    const getIndex = movies.findIndex((movie) => movie.id == id);
    console.log(getIndex, "getIndex");

    if (getIndex !== -1) {
      res.json(movies[getIndex]);
    } else {
      res.send("No Movie Found");
    }
  }

  // res.json(movies);
});

//get movies by year
router.get("/year/:year", (req, res) => {
  const year = req.params.year;
  if (year) {
    const filteredMovie = movies.filter((movie) => movie.year == year);
    console.log(filteredMovie, "movie");
    if (filteredMovie.length > 0) {
      res.json(filteredMovie);
    } else {
      res.send("No Movie Found");
    }
  }
});

//Add movies
router.post("/add/:id/:name/:year", (req, res) => {
  const id = req.params.id;
  const movieName = req.params.name;
  const movieYear = req.params.year;

  console.log(req.params, "values");
  const index = movies.findIndex((movie) => movie.id == id);

  if (index === -1) {
    movies.push({ id: id, name: movieName, year: movieYear });
    res.json(movies);
  } else {
    res.send("movie already exsit");
  }
});

// update movies put api
// router.put();
// patch api
// router.patch();
// splice

//Delete Movies by id delete api
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  const index = movies.findIndex((movie) => movie.id == id);

  if (index !== -1) {
    movies.splice(index, 1);
    res.json(movies);
  } else {
    res.send("Movies not found or may be deleted");
  }
});

module.exports = router;
