const express = require("express");
const app = express();

// middleware to parse jason request body
app.use(express.json());

//import routes for todo Api

const todoRoutes = require("./routes/todos");

//mount the todo Api routes

app.use("/api/v1", todoRoutes);

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
//connect to the database
const dbConnect = require("./confiq/database");
dbConnect();

//defalu Route
app.get("/", (req, res) => {
  res.send("Ayan this side");
});
