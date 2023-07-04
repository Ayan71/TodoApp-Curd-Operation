const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    //extract tile and describtion from request body

    const { title, description } = req.body;
    // create a new  todo obg and insert in Db
    const response = await Todo.create({ title, description });

    // send the ajson response with the success flag

    res.status(200).json({
      success: true,
      data: response,
      message: "Entery Create Sucessfulyy",
    });
  } catch {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
