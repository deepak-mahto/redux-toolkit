import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="rounded border border-black-500 focus: ring-2 focus:ring-indigo-400 text-base outline-none text-black-100 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-4 px-3 focus:outline-none hover:bg-indigo-600 rouded text-lg rounded"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
