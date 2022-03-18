const express = require("express");
const bodyParser = require("body-parser");

//connect database with server
require("./DBConnect");

//Initialize expree
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = 3001;

//importing file
const restApi = require("./Restapi");

//middleware router
app.use("/movies", restApi);

//listen server on port
app.listen(port, () => {
  console.log("server is running on port :", port);
});
