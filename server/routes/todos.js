const express = require("express");
const router = express.Router();
const { getAll, getByUsername } = require("../db/todos");

//GET /api/v1/todos
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
// router.get("/category/:category", (req, res) => {});

// router.get("/category/:is_complete", (req, res) => {
// });

module.exports = router;
