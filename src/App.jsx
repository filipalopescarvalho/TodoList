import React, { useState } from "react";
import "./App.css"; // Optional if you still use any custom CSS

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, done: false }]);
      setInputValue("");
    }
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
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
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Add
          </button>
        </div>
        <ul>
  {todos.map((todo, index) => (
    <li key={index} className="flex items-center justify-between mb-2 p-2 rounded hover:bg-purple-50">
      <label className="flex items-center space-x-3">
        <input 
          type="checkbox" 
          checked={todo.done} 
          onChange={() => toggleDone(index)} 
          className="form-checkbox h-5 w-5 text-purple-600"
        />
        <span className={todo.done ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </label>
      <button 
        onClick={() => deleteTodo(index)} 
        className="text-red-500 hover:text-red-700 ml-4"
        aria-label="Delete todo"
      >
        🗑️
      </button>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
};

export default App;
