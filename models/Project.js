const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  name:           { type: String, required: [true, 'Enter a pattern name']},
  owner:          { type: Schema.Types.ObjectId, ref: 'User'},
  description:    { type: String, required: false},
  notes:          { type: String},
  components:     [ { type: Schema.Types.ObjectId, ref: 'Components'} ],
  status:         { type: String, enum: ['New', 'Planned','Completed']}
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;