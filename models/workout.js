 const mongoose = require("mongoose");

 const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  day: {type: Date, default: Date.now},
  exercises: [
    {
      type: { 
        type: String 
      },
      name: { 
        type: String
      },
      duration: {
        type: Number 
      },
      weight: {
        type: Number
       },
      reps: {
        type: Number
       },
      sets: { 
        type: Number },
      distance: { 
        type: Number }
    },
  ],
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
