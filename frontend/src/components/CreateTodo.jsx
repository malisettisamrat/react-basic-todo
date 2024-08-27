function CreateTodo() {
  return (
    <div>
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        placeholder="Enter title"
      ></input>
      <br />
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        placeholder="Enter description"
      ></input>
      <br />
      <button style={{ margin: 10, padding: 5 }}>Add a Todo</button>
      <br />
    </div>
  );
}

export default CreateTodo;
