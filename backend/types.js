// Inputs that we can expect from the User

const zod = require("zod");

// Zod validation for the create todo body
const createTodo = zod.object({
  title: zod.string().min(1, "Title is required"),
  description: zod.string().min(1).max(250, "Description is too long"),
});

// zod validation for the update todo body
const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
