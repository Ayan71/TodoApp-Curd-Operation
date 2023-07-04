const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/babbarL", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database is connected successfully"))
    .catch((err) => {
      console.log("Issue in Database");
      console.log(err.message);
    });
};

module.exports = dbConnect;
