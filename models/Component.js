const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const componentSchema = new Schema ({
  name:         { type: String, required: [true, 'Enter a component name']},
  description:  { type: String, required: false},
  imageUrl:     { type: String, default: "/images/def-fabric.png"},
  owner:        { type: Schema.Types.ObjectId, ref: 'User'},
  template:     { type: Schema.Types.ObjectId, ref: 'Template'},
  projects:     [ { type: Schema.Types.ObjectId, ref: 'Project'} ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;