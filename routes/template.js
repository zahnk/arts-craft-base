const express = require("express");
const router = express.Router();
const Template = require("../models/Template");
const Element = require("../models/Element");
const mongoose = require("mongoose");

// GET /api/templates
router.get("/", async (req, res, next) => {
  try {
    // return all templates and elements
    const allTemplates = await Template.find({});
    
    res.json( allTemplates );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/elements", async (req, res, next) => {
  try {
    // return all templates and elements
    const allElements = await Element.find({});
    
    res.json( allElements );
  } catch (err) {
    res.status(500).json(err);
  }
});


// POST /api/projects
router.post("/create", (req, res) => {



  Project.create({
    title: req.body.title,
    description: req.body.description,
    owner: req.user._id
  })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
