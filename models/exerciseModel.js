const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
    day: {
        type: Date,
        trim: true
        },

    exercises: [
    {
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
    }]}
  )

  const Workout = mongoose.model("Workout", workoutSchema);

  module.exports = Workout;