const mongoose = require("mongoose");

const tagschema = new mongoose.Schema({
  tag: { type: String, required: true },
  id: Number,
});
const TagModel = mongoose.model("tag", tagschema);

module.exports = { TagModel };
