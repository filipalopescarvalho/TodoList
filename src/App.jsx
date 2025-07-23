import React, { useState} from "react";
import './App.css';


const App = () => { 
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    const addTodo = () => {
        if (inputValue.trim() !== "") {
        setTodos([...todos, inputValue]);
        setInputValue("");
        }
        return (
            <div className="container">
              {/* ... */}
            </div>
          );
        };
    
    return (
        <div>
        <h1>Todo List</h1>
        <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Add a new todo" 
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
            ))}
        </ul>
        </div>
    );
}
export default App;