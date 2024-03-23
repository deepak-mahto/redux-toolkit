import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";

const App = () => {
  return (
    <>
      <h1>redux-toolkit-todo</h1>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
