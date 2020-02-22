const express = require("express");
const views = require ("./views.js");
const router = express.Router();
const workout = require("./controller.js");

router.get("/api/workouts/range", async function(req, res){
  let data = await workout.readExercisesLimit();
  res.send(data);
});

router.get("/api/workouts", async function(req, res){
  let data = await workout.readExercises();
  res.send(data);
});

router.post("/api/workouts", async function(req, res) {
  let data = await workout.createExercise();
  res.send(data);
});

router.put("/api/workouts/:id", async function({params, body}, res){
  let data = await workout.updateExercise(params,body);
  res.send( data );
  });

///////////////////////////////////////////////////////

router.get("/stats", (req, res) => {
  res.sendFile(views.stats());
});

router.get("/exercise", (req, res) => {
  res.sendFile(views.exercise());
});

router.get("/", (req, res) => {
  res.sendFile(views.index());
});

module.exports = router;