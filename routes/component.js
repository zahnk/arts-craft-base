const express = require("express");
const router = express.Router();
const Component = require("../models/Component");


// GET /api/projects
router.get("/", (req, res) => {
  // return all projects
 
  Component.find({})
 //   .populate("tasks")
    .then(components => {
      res.json(components);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

const mongoose = require("mongoose");

module.exports = router;
