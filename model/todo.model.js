const mongoose = require("mongoose");

 const todoschema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  task_status: { type: String, required: true },
  subTasks: [{ subTaskTitle: String, status: Boolean }],
  user:String,
  tags:[],
 });
const Todomodel= mongoose.model("todoitem", todoschema);

module.exports={Todomodel}