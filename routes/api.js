const router = require("express").Router();
const Workout = require("../models").Workout;

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/api/workouts/range', ({ body }, res) => {
  
  Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }])
  .then(dbWorkout => {
    console.log(dbWorkout)
res.json(dbWorkout)
  })
  .catch(err => {
res.status(400).json(err)
  })
})

router.put('/api/workouts/:id', ({ body, params}, res) => {
  const filter = { id: params.id };


// `doc` is the document _after_ `update` was applied because of
// `new: true`
  Workout.findOneAndUpdate(filter, body, {
    new: true
  })
  .then(dbWorkout => {
res.json(dbWorkout)
  })
  .catch(err => {
res.status(400).json(err)
  })
});

router.post("/api/workouts/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
