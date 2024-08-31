export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button>{todo.completed ? "Done" : "Mark as Completed"}</button>
          </div>
        );
      })}
    </div>
  );
}
