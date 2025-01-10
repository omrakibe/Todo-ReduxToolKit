import { useSelector } from "react-redux";

function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <>
      <h1>Todo App </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
