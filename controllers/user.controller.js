const User = require("../models/user.model");

exports.FindConditional = (req, res) => {
  return new Promise(function (resolve, reject) {
    let text = req.params.text;
    LargeCSV.find({ Col2: { $regex: text } }, function (err, data) {
      if (err) {
        reject(err.message);
      } //else if (data) {
      resolve(data);
      // }
    });
  })
    .then((data) => {
      if (data.length > 0) {
        res.status(200).send({ Success: true, data });
      } else {
        res.status(200).send({ Success: true, message: "No Data Found!" });
      }
    })
    .catch((err) => {
      res.status(400).send({ Success: false, message: err });
    });
};

exports.FindAll = async (req, res) => {
  await User.find({})
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

exports.AddUser = async (req, res) => {
  
  let Name = req.body.Name,
    Age = req.body.Age;
  if (!Name || !Age) {
    return res.status(400).send({ Success: false, message: "Pass Body Data!" });
  } else {
    const user = new User({
      Name: Name,
      Age: Age,
    });

    await user
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
