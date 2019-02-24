const express = require("express");
const router = express.Router();

//GET /api/v1/todos
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      text: "hello"
    }
  ]);
});

// router.get("/category/:category", (req, res) => {});

// router.get("/category/:is_complete", (req, res) => {
// });

module.exports = router;
