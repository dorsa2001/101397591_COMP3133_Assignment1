const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  first_name: { type: String, required: true }, // Ensure required fields
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  designation: { type: String, required: true },
  salary: { type: Number, required: true },
  date_of_joining: { type: String, required: true },
  department: { type: String, required: true },
  employee_photo: { type: String },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
