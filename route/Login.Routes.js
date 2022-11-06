const { Router } = require("express");
const LoginRouter = Router();
const { UserModel } = require("../model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

LoginRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let data = await UserModel.findOne({ email });

  if (!data) {
    res.send("Something Went Wrong");
    return;
  }
  const hash = data.password;

  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      let token = jwt.sign({ user: data.email }, "foo");

      res.status(200) .send({ msg: "Token Generated", token: token, email: email });
    } else {
      res.status(401).send({ msg: "Invalid Users" });
    }
  });
});

module.exports = { LoginRouter };
