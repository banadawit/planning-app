import { useState } from "react";

export default function TaskList({ tasks, deleteTask, toggleComplete }) {
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  return (
    <ul className="space-y-3">
      {tasks.map((t) => (
        <li
          key={t.id}
          className={`flex items-center justify-between p-4 rounded-xl shadow-md transition-colors duration-300 ${
            t.priority === "high"
              ? "bg-red-100 dark:bg-red-800/20 border border-red-200 dark:border-red-700"
              : t.priority === "medium"
              ? "bg-yellow-100 dark:bg-yellow-800/20 border border-yellow-200 dark:border-yellow-700"
              : "bg-green-100 dark:bg-green-800/20 border border-green-200 dark:border-green-700"
          }`}
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleComplete(t.id)}
              className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            />
            <div className="flex flex-col">
              <span
                className={`text-lg font-semibold ${
                  t.completed
                    ? "line-through text-gray-500 dark:text-gray-400"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {t.task}
              </span>
              <div className="flex space-x-2 mt-1">
                {t.deadline && (
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                    📅 {new Date(t.deadline).toLocaleDateString()}
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded-lg text-sm font-medium ${
                    t.priority === "high"
                      ? "bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200"
                      : t.priority === "medium"
                      ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
                      : "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
                  }`}
                >
                  {t.priority}
                </span>
                <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 rounded-lg text-sm text-blue-800 dark:text-blue-200">
                  {t.category}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => deleteTask(t.id)}
            className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
            aria-label="Delete task"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
      {tasks.length === 0 && (
        <p className="text-center py-4 text-gray-500 dark:text-gray-400">
          No tasks yet. Add one above!
        </p>
      )}
    </ul>
  );
}
