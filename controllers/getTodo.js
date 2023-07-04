const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from databse
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo is fetch ",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};

exports.getTodobyId = async (req, res) => {
  try {
    //extract todo items find by id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        sucess: false,
        message: "No Data found",
      });
    }
    //data given founnd

    res.status(200).json({
      success: true,
      data: todo,
      message: "Succesfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};
