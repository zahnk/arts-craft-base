const express = require("express");
const router = express.Router();
const Component = require("../models/Component");
const mongoose = require("mongoose");

// GET /api/projects
router.get("/", (req, res) => {
  // return all projects
 console.log ("bis hierhin")
  Component.find({})
 //   .populate("tasks")
    .then(components => {
      res.json(components);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



module.exports = router;
