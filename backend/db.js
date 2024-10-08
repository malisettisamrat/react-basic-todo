const mongoose = require("mongoose");

// connect with mongodb URL
mongoose.connect("mongodb+srv://sam:1234@cluster0.d6521.mongodb.net/todos");

// Create the todo schema
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// Create the mongodb model
const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
