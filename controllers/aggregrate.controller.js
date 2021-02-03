const User = require("../models/user.model");
const Todo = require("../models/todo.model");

exports.FindTaskByUser = async (req, res) => {
  await Todo.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "postedBy",
        foreignField: "_id",
        as: "Task By User",
      },
    },
  ])
    .then((data) => {
      if (data.length > 0) {
        res.status(200).send({ Success: true, data });
      } else {
        res.status(200).send({ Success: true, message: "No Data Found!" });
      }
    })
    .catch((err) => {
      res.status(400).send({ Success: false, message: err.message });
    });
};

exports.FindUserWithTasks = async (req, res) => {
  await User.aggregate([
    {
      $lookup: {
        from: "todos",
        localField: "_id",
        foreignField: "postedBy",
        as: "Task Of User",
      },
    },
  ])
    .then((data) => {
      if (data.length > 0) {
        res.status(200).send({ Success: true, data });
      } else {
        res.status(200).send({ Success: true, message: "No Data Found!" });
      }
    })
    .catch((err) => {
      res.status(400).send({ Success: false, message: err.message });
    });
};
