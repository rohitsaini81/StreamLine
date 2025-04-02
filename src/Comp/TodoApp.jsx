import { useState } from "react";
import { Trash2, CheckCircle } from "lucide-react";
import Draggable from "react-draggable";
export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Draggable>
    <div className="todo h-[50vh] w-1/3 border-2 border-red-400 rounded-lg bg-gray-100 flex items-center justify-center p-10 cursor-grab active:cursor-grabbing">
      <div className="w-full flex flex-col items-center justify-center max-w-md bg-white shadow-lg p-6 rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">
          Todo App
        </h1>
        <div className="w-[50%] flex gap-2 mb-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button
            onClick={addTask}
            className="w-[50%] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
        <div>
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet!</p>
          ) : (
            <ul className="w-full space-y-2">
              {tasks.map((t, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center p-2 rounded-lg shadow-md ${
                    t.completed ? "bg-green-100" : "bg-gray-200"
                  }`}
                >
                  <span
                    onClick={() => toggleTask(index)}
                    className={`flex-1 cursor-pointer ${
                      t.completed ? "line-through text-gray-500" : "text-black"
                    }`}
                  >
                    {t.text}
                  </span>
                  <div className="flex gap-2">
                    <CheckCircle
                      className="text-green-500 cursor-pointer"
                      onClick={() => toggleTask(index)}
                    />
                    <Trash2
                      className="text-red-500 cursor-pointer"
                      onClick={() => removeTask(index)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    </Draggable>
  );
}
