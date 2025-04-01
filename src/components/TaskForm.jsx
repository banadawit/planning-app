import { useState } from "react";
import PropTypes from "prop-types";

export default function TaskForm({ addTask, darkMode = false }) {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(() => {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 1);
    return defaultDate.toISOString().split("T")[0];
  });
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("learning");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      alert("Task description cannot be empty!");
      return;
    }
    addTask({
      task: task.trim(),
      deadline,
      priority,
      category,
      id: Date.now(),
      completed: false,
    });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Task Input */}
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What's your plan?"
          className={`w-full p-3 rounded-lg border ${
            darkMode
              ? "bg-gray-700/50 border-gray-600/50 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/50"
              : "bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
          } transition-colors focus:ring-2 focus:outline-none`}
          aria-label="Task description"
        />
      </div>

      {/* Options Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Date Input */}
        <div>
          <label
            className={`block text-xs mb-1 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Due Date
          </label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className={`w-full p-2.5 rounded-lg border ${
              darkMode
                ? "bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-500 focus:ring-blue-500/50"
                : "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-blue-500"
            } transition-colors focus:ring-2 focus:outline-none`}
            min={new Date().toISOString().split("T")[0]}
            aria-label="Due date"
          />
        </div>

        {/* Priority Select */}
        <div>
          <label
            className={`block text-xs mb-1 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={`w-full p-2.5 rounded-lg border ${
              darkMode
                ? "bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-500 focus:ring-blue-500/50"
                : "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-blue-500"
            } transition-colors focus:ring-2 focus:outline-none`}
            aria-label="Priority"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Category Select */}
        <div>
          <label
            className={`block text-xs mb-1 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`w-full p-2.5 rounded-lg border ${
              darkMode
                ? "bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-500 focus:ring-blue-500/50"
                : "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-blue-500"
            } transition-colors focus:ring-2 focus:outline-none`}
            aria-label="Category"
          >
            <option value="learning">Learning</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
            : "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10"
        }`}
      >
        Add Task
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
};

TaskForm.defaultProps = {
  darkMode: false,
};
