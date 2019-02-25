const express = require("express");
const router = express.Router();
const { getAll, getByUsername, createTodo } = require("../db/todos");

router.get("/", (req, res) => {
  getAll()
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/:username", (req, res) => {
  getByUsername(req.params.username)
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.post("/:username", (req, res) => {
  const todo = {
    username: req.params.username,
    task: req.body.task,
    priority: req.body.priority,
    category: req.body.category,
    is_complete: req.body.is_complete,
    due_at: req.body.due_at
  };
  createTodo(todo)
    .then(([id]) => {
      res.json({ id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

// router.get("/category/:category", (req, res) => {});

// router.get("/category/:is_complete", (req, res) => {
// });

module.exports = router;
