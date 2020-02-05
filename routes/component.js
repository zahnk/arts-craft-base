const express = require("express");
const router = express.Router();
const Component = require("../models/Component");
const mongoose = require("mongoose");

// GET /api/components
router.get("/", (req, res) => {
  // return all components
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

// GET /api/components/:id
router.get("/:id", (req, res) => {
  console.log ("COMPONENT GET")
  // return 1 component w/ a given id
  const componentId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(componentId)) {
    res.status(400).json({ message: "ComponentId is not valid" });
    return;
  }

Component.findById(componentId)
    .then(component => {
      if (!component) {
        res.status(404).json({ message: "Component not found" });
      } else res.json(component);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE /api/components/:id
router.delete("/:id", (req, res) => {
  //console.log("express delete component",req.params.id)
  const componentId = req.params.id;
 Component.findByIdAndDelete(componentId)
    .then( response => {
      res.json("ok");
      return;       
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
