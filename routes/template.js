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


/*
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

/*
// POST /api/projects
router.post("/", (req, res) => {
  // create 1 project

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

// PUT /api/projects/:id
router.put("/:id", (req, res) => {
  Project.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description
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

// DELETE /api/projects/:id
router.delete("/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(project => {
      // Deletes all the documents in the Task collection where the value for the `_id` field is present in the `project.tasks` array
      return Task.deleteMany({ _id: { $in: project.tasks } }).then(() =>
        res.json({ message: "ok" })
      );
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
*/
module.exports = router;
