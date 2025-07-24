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
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, rgb(102, 194, 234), rgb(75, 126, 162))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 1rem",
        boxSizing: "border-box",
        width: "100vw",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "600px",
          padding: "0.75rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "strech",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "rgb(102, 194, 234)",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          To Do List
        </h1>

        <div>
          <label
            htmlFor="todo-input"
            style={{ fontWeight: "600", color: "#555" }}
          >
            Add Task
          </label>
          <div
            style={{
              display: "flex",
              marginTop: "0.5rem",
              flexDirection: "row",
              flexWrap: "nowrap",
            }}
          >
            <input
              id="todo-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter task..."
              style={{
                flexGrow: 1,
                padding: "0.5rem",
                fontSize: "1rem",
                borderRadius: "8px 0 0 8px",
                border: "2px solid #ccc",
                borderRight: "none",
                outline: "none",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") addTodo();
              }}
            />
            <button
              onClick={addTodo}
              style={{
                backgroundColor: "rgb(75, 126, 162)",
                color: "white",
                border: "none",
                padding: "0 1.2rem",
                borderRadius: "0 8px 8px 0",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add
            </button>
          </div>
        </div>

        <div>
          {todos.length === 0 ? (
            <p style={{ textAlign: "center", color: "#999" }}>No tasks yet</p>
          ) : (
            todos.map((todo, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "white",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  width: "100%",
                  gap: "0.75rem",
                  flexWrap: "nowrap",
                  minWidth: 0,
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(index)}
                  style={{ flexShrink: 0, whiteSpace: "nowrap" }}
                />

                <div
                  style={{
                    flexGrow: 1,
                    whiteSpace: "nowrap",
                    overflow: "visible",
                    wordBreak: "normal",
                    color: todo.done ? "#999" : "#333",
                    textDecoration: todo.done ? "line-through" : "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  {todo.text}
                </div>

                <button
                  onClick={() => deleteTodo(index)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#c53030",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
