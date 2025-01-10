import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../src/features/todo/todoSlice";

function AddForm() {
  const [task, setTask] = useState("");
  let dispatch = useDispatch();

  let handleInput = (event) => {
    setTask(event.target.value);
  };

  let handleButton = () => {
    console.log(task);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setTask("");
    dispatch(addTodo(task));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="input">Insert Task Here - </label>

        <input type="text" onChange={handleInput} value={task} id="input" />
        <br />
        <br />
        <button onClick={handleButton}>Create New!</button>
      </form>
    </>
  );
}

export default AddForm;
