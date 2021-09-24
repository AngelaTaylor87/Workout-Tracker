const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exercises: {
    type: String,
    trim: true,
    required: "Choose a workout"
  },
  value: {
    type: Number,
    required: "Enter an goal"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
