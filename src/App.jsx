import React, { useState } from "react";
import "./App.css"; 

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
    <div className="container">
      <h1>📝 Todo List</h1>
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(index)}
              style={{ marginRight: "10px" }}
            />
            <span
              style={{
                flexGrow: 1,
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "#999" : "#000",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(index)}
              style={{
                backgroundColor: "transparent",
                color: "#007bff",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
