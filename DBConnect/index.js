const mongoose = require("mongoose");

const dbUserName = "amansainju";
const dbPassword = "AMANSAINJU";
const dbUrl = `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.nr2zz.mongodb.net/mern?retryWrites=true&w=majority`;

mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      return console.log("error while connecting db", err.message);
    } else {
      console.log("db connected successfully");
    }
  }
);

module.exports = mongoose;
