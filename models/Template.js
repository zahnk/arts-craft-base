const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const templateSchema = new Schema({
  name:           { type: String },
  description:    { type: String },

  elements:       [ { type: Schema.Types.ObjectId, ref: 'Element'} ],
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;