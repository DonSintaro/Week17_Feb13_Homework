const Workout = require("../models/exerciseModel.js");


async function createExercise(){
    let newWorkout = await new Workout({
        day: new Date(),
        exercises: []
      });
      await newWorkout.save()
      return newWorkout;
}

async function updateExercise(params,body){
    let data = await Workout.findOne({_id:params.id});
    await data.exercises.push(body)
    await data.save();
    return data;
}

async function readExercises(){
    return await Workout.find({});
}

async function readExercisesLimit(){
    return await Workout.find({}).limit(7);
}

module.exports = {
    readExercises:readExercises,
    readExercisesLimit:readExercisesLimit,
    updateExercise:updateExercise,
    createExercise:createExercise

}