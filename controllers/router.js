const express = require("express");
const views = require ("./views.js");



const router = express.Router();

const Workout = require("../models/exerciseModel.js");/////////remove later

router.get("/api/workouts/range", async function(req, res){
  
  let data = await Workout.find({})

  res.send(data);

});

router.get("/api/workouts", (req, res) => {
  
});

router.post("/api/workouts", ({body}, res) => {
  let newWorkout = new Workout({
    day: new Date(),
    exercises: []
  });
  newWorkout.save()

  res.send(newWorkout);
});

router.put("/api/workouts/:id", ({ params,body }, res) => {
  console.log(body);
  Workout.findOne({_id:params.id}).then(async function(data){
    console.log("Got to put send thingfdafdsafdsf");
    await data.exercises.push(body)
    await data.save();
    res.send( data );
      //send an object of data to confirm 
  })
  .catch(function(err){
    console.log(err);
    res.status(500).send(err);
  })

  
});

///////////////////////////////////////////////////////

router.get("/stats", (req, res) => {
  res.sendFile(views.stats());
});

router.get("/exercise", (req, res) => {
  console.log("Got here");
  res.sendFile(views.exercise());
});

router.get("/", (req, res) => {
  res.sendFile(views.index());
});

module.exports = router;