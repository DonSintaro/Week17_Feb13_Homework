const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistance = new Schema({
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
    }
  })

