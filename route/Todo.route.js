const { Router } = require("express");
const { Todomodel } = require("../model/todo.model");

const TodoRouter = Router();

TodoRouter.post("/tasks", async (req, res) => {
  const { user } = req.body;
  console.log(req.body, "route");
  await Todomodel.insertMany([req.body]);
  res.send("Todo Is Added");
});

TodoRouter.delete("/tasks/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    await Todomodel.findByIdAndDelete({ _id });
    res.send({ msg: "Todo Is deleted sucessfully" });
  } catch (err) {
    res.status(401).send({ msg: err });
  }
});

TodoRouter.patch("/tasks/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    await Todomodel.findByIdAndUpdate(_id, req.body);
    res.send({ msg: "Todo Is updated sucessfully" });
  } catch (err) {
    res.status(401).send({ msg: err });
  }
});

TodoRouter.get("/tasks", async (req, res) => {
  const user = req.body.user;
  let tasks = await Todomodel.find({ user: user });
  res.send(tasks);
});

module.exports = { TodoRouter };
