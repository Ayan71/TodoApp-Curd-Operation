const express = require("express");
const router = express.Router();

// import controller;

const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodobyId } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deteteTodo");

// define Api route
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodobyId/:id", getTodobyId);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deteteTodo/:id", deleteTodo);

module.exports = router;
