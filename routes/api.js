const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      { _id: req.params.id }, { $push: {exercises: req.body} }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", ({body}, res)=> {
  Workout.aggregate([
      { $addFields: {totalDuration: {$sum: "$exercises.duration"}}}
  ])
      .then (dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
});

router.get("/api/workouts/range", ({body}, res)=> {
  Workout.aggregate([
      { $addFields: {totalDuration: {$sum: "$exercises.duration" }}}
  ]) .sort({_id: -1})
      .limit(7)
  .then (dbWorkout => {
          res.json(dbWorkout)
  })   .catch(err => {
          res.status(400).json(err);
      });
  
});

module.exports = router;