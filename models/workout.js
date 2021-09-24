 const mongoose = require("mongoose");

 const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  day: {type: Date, default: Date.now},
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
