const express = require("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());

// creating a TODO
app.post("/todo", function (req, res) {
  const todoBody = req.body;
  const parsedBody = createTodo.safeParse(todoBody);

  if (!parsedBody.success) {
    res.status(411).json({
      message: "You sent the wrong details",
    });
    return;
  }

  // send it to DB...
});

// Get all the TODO's
app.get("/todos", function (req, res) {});

//
app.put("/completed", function (req, res) {
  const todoBody = req.body;
  const parsedBody = createTodo.safeParse(todoBody);

  if (!parsedBody.success) {
    res.status(411).json({
      message: "You sent the wrong details",
    });
    return;
  }

  // update to DB...
});
