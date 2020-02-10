const express = require("express");
const router = express.Router();
const Element = require("../models/Element");
const mongoose = require("mongoose");

const initSeeds =
[
	{
		"element":     "InputText",
		"description": "FORM-INPUT of type text",
		"eltype":      "text",

		"fixedProps":    [
		  { "prop": "name"        , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "label"       , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "placeholder" , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "readonly"    , "typ": "checkbox", "disp": "Boolean", "def": false },
		  { "prop": "required"    , "typ": "checkbox", "disp": "Boolean", "def": false }
		],

		"variableProps": [
		  { "prop": "maxlength"   , "typ": "number", "disp": "Number", "def": 100 }
		],
		"status": false 
	  
	},
	{
		"element":     "InputNumber",
		"description": "FORM-INPUT of type number",
		"eltype":      "number",

		"fixedProps":    [
		  { "prop": "name"        , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "label"       , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "placeholder" , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "readonly"    , "typ": "checkbox", "disp": "Boolean", "def": false },
		  { "prop": "required"    , "typ": "checkbox", "disp": "Boolean", "def": false }
		],

		"variableProps": [
		  { "prop": "min"         , "typ": "number", "disp": "Number", "def": 0 },
		  { "prop": "max"         , "typ": "number", "disp": "Number", "def": 100 },
		  { "prop": "step"        , "typ": "number", "disp": "Number", "def": 1 }
		],
		"status": false 
	},
	{
		"element":     "InputColor",
		"description": "FORM-INPUT of type color",
		"eltype":      "color",

		"fixedProps":    [
		  { "prop": "name"        , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "label"       , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "placeholder" , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "readonly"    , "typ": "checkbox", "disp": "Boolean", "def": false },
		  { "prop": "required"    , "typ": "checkbox", "disp": "Boolean", "def": false }
		],

		"variableProps": [
		  { "prop": "defaultcolor" , "typ": "text", "disp": "Color", "def": "#0000000", "ext": "InputColor" }
		],
		"status": false 
	},
	{  
		"element":     "InputCheckBox",
		"description": "FORM-INPUT of type checkbox",
		"eltype":      "checkbox",

		"fixedProps":    [
		  { "prop": "name"        , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "label"       , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "placeholder" , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "readonly"    , "typ": "checkbox", "disp": "Boolean", "def": false },
		  { "prop": "required"    , "typ": "checkbox", "disp": "Boolean", "def": false }
		],

		"variableProps": [
		  { "prop": "checked"     , "typ": "checkbox", "def": false }
		],
		"status": false 
	},
	{
		"element":     "InputTextArea",
		"description": "FORM-INPUT of type textarea",
		"eltype":      "textarea",

		"fixedProps":    [
		  { "prop": "name"        , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "label"       , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "placeholder" , "typ": "text",     "disp": "String",  "def": "" },
		  { "prop": "readonly"    , "typ": "checkbox", "disp": "Boolean", "def": false },
		  { "prop": "required"    , "typ": "checkbox", "disp": "Boolean", "def": false }
		],

		"variableProps": [
		  { "prop": "maxlength"   , "typ": "number", "disp": "Number", "def": 100 },
		  { "prop": "wrap"        , "typ": "text",   "disp": "String", "def": "soft" }
		],
		"status": false
	}
];

/*
let readItems = new Promise((resolve, reject) => {
  var getElementsFromFile = function(cb) { 
    console.log("called getElementsFromFile");
    fs.readFile('./models/element-seed.json', 'utf8', (err, data) => {
      if (err) cb({error: err});
      cb({items: JSON.parse(data)});
    });
  };

  getElementsFromFile(function (cb) {
    console.log("called getElementsFromFile callback");
    if (cb.error) {
      resolve( { error: "Elements file not imported" } );
    } else {
      console.log("I:",cb.items);
      resolve( { items: cb.items.slice() } );
    }
  });
});
*/

// GET /api/initelements/:password
router.get("/:password", async (req, res, next) => {
  let readItems = [];

  const authorized = ( req.params.password === 'TraVogZahBie' );
  console.log( "IES(E)", req.params.password, "Auth:", authorized ); 
  console.log( "TRY");
  try {
    console.log( "IES(E)", "readItems:", readItems );
    if( authorized ) {
      await Element.deleteMany();
      await Element.create( initSeeds );
    };
    res.json({message: "Elements file were imported"});
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
