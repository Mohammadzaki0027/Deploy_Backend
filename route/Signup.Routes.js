const { Router } = require("express");
const SignupRouter = Router();
const { UserModel } = require("../model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

SignupRouter.post("/signup", async (req, res) => {
  const { email, password, lastname, firstname } = req.body;

  let result = await UserModel.findOne({ email });
  
  if (result === null) {
    bcrypt.hash(password, 6, async function (err, hash) {
      try {
        await UserModel.insertMany([
          { email, password: hash, firstname, lastname },
        ]);
        res.send({ msg: "Sign Up sucsessfully" });
      } catch (err) {
        res.send({ msg: err });
      }
    });
  } else {
    res.send({ msg: "Email already exist" });
  }
});

module.exports = { SignupRouter };
