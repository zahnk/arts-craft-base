const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const mongoose = require("mongoose");

// GET /api/projects
router.get("/", (req, res) => {
  // console.log("PJ GET", req)
  // return all projects
 
  Project.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



// GET /api/projects/:id
router.get("/:id", (req, res) => {
  // return 1 project w/ a given id
  const projectId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: "ProjectId is not valid" });
    return;
  }

  Project.findById(projectId)
    .then(project => {
      if (!project) {
        res.status(404).json({ message: "Project not found" });
      } else res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// GET /api/projects/pop/:id
router.get("/pop/:id/", (req, res) => {
  // return 1 project w/ a given id
  const projectId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: "ProjectId is not valid" });
    return;
  }

  Project.findById(projectId)
    .populate( "components" )
    .then(project => {
      if (!project) {
        res.status(404).json({ message: "Project not found" });
      } else res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE /api/projects/:id
router.delete("/:id", (req, res) => {
  //console.log("express delete project",req.params.id)
  const projectId = req.params.id;
  Project.findByIdAndDelete(projectId)
    .then( response => {
      res.json("ok");
      return;       
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


// POST /api/projects
router.post("/create", (req, res) => {
  // create 1 project
  console.log(req.body);
  Project.create({
    name: req.body.name,
    owner: req.user._id,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    notes: req.body.notes,
    //to be inserted-->> components: []
    status: req.body.status
  })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// PUT /api/projects/:id
router.put("/:id", (req, res) => {
  console.log ("PRJ-PUT", req.body)
  Project.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      owner: req.user._id,
      notes: req.body.notes,
      status: req.body.status,
      components: req.body.components
    },
    { new: true }
  )
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post
module.exports = router;
