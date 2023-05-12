const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenderSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
});

GenderSchema.virtual("url").get(function () {
  return `/catalog/gender/${this._id}`;
});

const Gender = mongoose.model("Gender", GenderSchema);
module.exports = Gender;
