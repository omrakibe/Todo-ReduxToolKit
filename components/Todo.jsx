import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../src/features/todo/todoSlice";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  let handleCLick = (id) => {
    dispatch(deleteTodo(id));
  };

  let handleMark = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <h1>Todo App </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "None" }
              }
            >
              {todo.task}
            </span>

            <button onClick={() => handleCLick(todo.id)}>Delete</button>
            <button onClick={() => handleMark(todo.id)}>Marks as Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
