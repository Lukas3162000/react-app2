import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Kaffee machen ☕" },
    { id: 2, text: "Mit ChatGPT debuggen 🤖" },
    { id: 3, text: "Todo-App reparieren 🛠️" },
  ]);

  const [dragOverIndex, setDragOverIndex] = useState(null);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
    setDragOverIndex(index);
  };

  const handleDragEnd = () => {
    const copiedTasks = [...tasks];
    const draggedItemContent = copiedTasks[dragItem.current];
    copiedTasks.splice(dragItem.current, 1);
    copiedTasks.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    setDragOverIndex(null);
    setTasks(copiedTasks);
  };

  return (
    <div className="App">
      <h2>📝 Todo Liste (ohne Library)</h2>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
             key={task.id}
              className={`todo-item ${index === dragOverIndex ? "drag-over" : ""}`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
      >
  {task.text}
</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
