const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const UserModel = mongoose.model("userdata", userschema);
module.exports = { UserModel };
