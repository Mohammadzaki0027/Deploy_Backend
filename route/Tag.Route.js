const { Router } = require("express");
const { TagModel } = require("../model/tag.model");

const TagRouter = Router();

TagRouter.post("/tagList", async (req, res) => {
  console.log(req.body);
  await TagModel.insertMany([req.body]);
  res.send("Tag Is added");
});

TagRouter.get("/tagList", async (req, res) => {
  const user = req.body.user;

  try {
    let tasks = await TagModel.find();
    res.send(tasks);
  } catch (err) {
  
    res.status(401).send(err);
  }
});

module.exports = { TagRouter };
