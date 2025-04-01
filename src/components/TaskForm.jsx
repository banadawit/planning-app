import { useState } from "react";
import PropTypes from "prop-types";

export default function TaskForm({ addTask }) {
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
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="What's your plan?"
        className="w-full p-2 border rounded dark:bg-gray-700"
        aria-label="Task description"
      />
      <div className="grid grid-cols-3 gap-2">
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700"
          min={new Date().toISOString().split("T")[0]}
          aria-label="Due date"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700"
          aria-label="Priority"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700"
          aria-label="Category"
        >
          <option value="learning">Learning</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
