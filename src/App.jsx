import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, done: false }]);
      setInputValue("");
    }
  };

  const toggleDone = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          📝 Todo List
        </h1>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2 border-b"
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(index)}
                  className="form-checkbox h-5 w-5 text-purple-600"
                />
                <span
                  className={
                    todo.done
                      ? "line-through text-gray-400 select-none"
                      : "select-none"
                  }
                >
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => deleteTodo(index)}
                className="ml-4 text-red-600 hover:text-red-800 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
