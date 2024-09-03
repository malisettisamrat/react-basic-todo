import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
        placeholder="Enter title"
      ></input>
      <br />
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
        placeholder="Enter description"
      ></input>
      <br />
      <button
        style={{ margin: 10, padding: 5 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            header: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a Todo
      </button>
      <br />
    </div>
  );
}

export default CreateTodo;
