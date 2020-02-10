const express = require("express");
const router = express.Router();
const Template = require("../models/Template");
const Element = require("../models/Element");
const mongoose = require("mongoose");

// GET /api/templates
router.get("/", async (req, res, next) => {
  try {
    // return all templates
    const allTemplates = await Template.find({});
    
    res.json( allTemplates );
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/elements", async (req, res, next) => {
  try {
    // return all elements
    const allElements = await Element.find({});
    
    res.json( allElements );
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/templates/:id
router.get("/:id", async (req, res, next) => {
  const templateId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(templateId)) {
    res.status(400).json({ message: "TemplateId is not valid" });
    return;
  }

  try {
    // return one templates and elements
    const foundTemplate = await Template.findById(templateId);
    if (!foundTemplate) {
      res.status(404).json({ message: "Template not found" });
    } else res.json(foundTemplate);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST api/templates
router.post("/create", async (req, res) => {
  const { info, data } = req.body;
  console.log( "POST:" , info, "|", data );

  try {
    // create all
    const result = await Template.create(data);    
    res.json( result );
  } catch (err) {
    res.status(500).json(err);
  }
});

// put /api/templates/:id
router.put("/:id", async (req, res) => {
  const templateId = req.params.id;
  console.log( "P", req.params );

  const { info, data } = req.body;
  console.log( "PUT:", templateId, " : ", info, "|", data );

  try {
    const template = await Template.findByIdAndUpdate(
        templateId,
        data
      );    
    res.json( template );
  } catch (err) {
    res.status(500).json(err);
  }

});

// DELETE /api/templates/:id
router.delete("/:id", async (req, res) => {
  const templateId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(templateId)) {
    res.status(400).json({ message: "TemplateId is not valid" });
    return;
  }

  try {
    // delete template by passed id
    await Template.findByIdAndDelete(templateId);    
    res.json( "OK" );
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
