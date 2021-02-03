const Todo = require('../models/todo.model');

exports.FindAll = async (req, res) => {
    await Todo.find({})
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

exports.AddNotes = async (req, res) => {
  
    let Task = req.body.Task,
    postedBy = req.body.postedBy;
    if (!Task || !postedBy) {
      return res.status(400).send({ Success: false, message: "Pass Body Data!" });
    } else {
      const todo = new Todo({
        Task:Task,
        postedBy:postedBy
      });
  
      await todo
        .save()
        .then((data) => {
          if (!data) {
            return res
              .status(400)
              .send({ Success: false, message: "Error while saving data!" });
          }
          return res.status(200).send({ Success: true, data: data });
        })
        .catch((err) => {
          if (err) {
            return res.status(400).send({ Success: false, message: err.message });
          }
        });
    }
  };