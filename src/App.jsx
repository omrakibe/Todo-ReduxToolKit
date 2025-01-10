import "./App.css";
import Todo from "../components/Todo";
import AddForm from "../components/AddForm";
import { Provider } from "react-redux"; 
import { store } from "./app/store";

function App() {
  return (
    <>
    <Provider store={store}>
        <Todo />
        <AddForm />
    </Provider>
    </>
)
}

export default App;
