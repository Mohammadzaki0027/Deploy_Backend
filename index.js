const express = require("express");
const { connection } = require("./config/db");

const app = express();
let cors = require("cors");
const { LoginRouter } = require("./route/Login.Routes");
const { SignupRouter } = require("./route/Signup.Routes");
const { TodoRouter } = require("./route/Todo.route");
const { TagRouter } = require("./route/Tag.Route");
const { Auth } = require("./middleware/Autth.Middleware");

app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT||8500;
app.use(express.json());

app.use("/", SignupRouter);
app.use("/", LoginRouter);
app.use("/",Auth)
app.use("/", TodoRouter);
app.use("/", TagRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`connected to PORT No ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
