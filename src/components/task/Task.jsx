import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Task() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      if (editIndex !== -1) {
        const newTodos = [...todos];
        newTodos[editIndex] = inputValue;
        setTodos(newTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl mb-4 text-center">Todo App</h1>
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full rounded-l py-2 px-4"
            placeholder="Add a new todo"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            {editIndex !== -1 ? 'Update' : 'Add'}
          </button>
        </div>
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="bg-gray-200 text-gray-700 py-2 px-4 mb-2 rounded flex items-center justify-between">
              {todo}
              <div>
                <button
                  onClick={() => handleEditTodo(index)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 mx-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
