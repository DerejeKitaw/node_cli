const mongoose = require('mongoose');

// Custommer schema
const customSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  email: { type: String }
});

// Define and export
module.export = mongoose.model('Customert', customSchema);