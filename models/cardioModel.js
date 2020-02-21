const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "type required"
      },
    name: {
        type: String,
        trim: true,
        required: "workout name required"
    },
    duration: {
        type: Number,
        trim: true
    },
    weight: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    distance: {
        type: Number,
        trim: true
    }
  })

  const Exercise = mongoose.model("Exercise", exerciseSchema);

  module.exports = Exercise;