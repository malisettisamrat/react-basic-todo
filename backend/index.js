const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

// creating a TODO
app.post("/todo", async function (req, res) {
  const todoBody = req.body;
  const parsedBody = createTodo.safeParse(todoBody);

  if (!parsedBody.success) {
    res.status(411).json({
      message: "You sent the wrong details",
    });
    return;
  }

  // send it to DB...
  await todo.create({
    title: todoBody.title,
    description: todoBody.description,
    completed: false,
  });

  res.json({
    message: "Todo created",
  });
});

// Get all the TODO's
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

//
app.put("/completed", async function (req, res) {
  const todoBody = req.body;
  const parsedBody = createTodo.safeParse(todoBody);

  if (!parsedBody.success) {
    res.status(411).json({
      message: "You sent the wrong details",
    });
    return;
  }

  // update to DB...
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    message: "Todo marked as completed",
  });
});
