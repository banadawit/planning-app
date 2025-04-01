import { useState } from "react";

export default function TaskList({ tasks, deleteTask, toggleComplete }) {
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  return (
    <div className="space-y-2">
      {tasks.map((t) => (
        <div
          key={t.id}
          className={`p-3 rounded-lg flex items-start border transition-all ${
            t.priority === "high"
              ? "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-900/30"
              : t.priority === "medium"
              ? "border-yellow-300 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/30"
              : "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-900/30"
          }`}
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => toggleComplete(t.id)}
            className="mt-1 mr-3 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
          />

          {/* Task Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <span
                className={`block font-medium ${
                  t.completed
                    ? "line-through text-gray-400 dark:text-gray-500"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {t.task}
              </span>
              <button
                onClick={() => deleteTask(t.id)}
                className="ml-2 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
                aria-label="Delete task"
              >
                ✕
              </button>
            </div>

            {/* Task Metadata */}
            <div className="mt-1 flex flex-wrap gap-2 text-sm">
              {t.deadline && (
                <span className="px-2 py-1 bg-gray-100 rounded-md dark:bg-gray-700">
                  📅 {new Date(t.deadline).toLocaleDateString()}
                </span>
              )}
              <span
                className={`px-2 py-1 rounded-md ${
                  t.priority === "high"
                    ? "bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200"
                    : t.priority === "medium"
                    ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
                    : "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
                }`}
              >
                {t.priority} priority
              </span>
              <span className="px-2 py-1 bg-blue-100 rounded-md text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                {t.category}
              </span>
            </div>
          </div>
        </div>
      ))}

      {tasks.length === 0 && (
        <p className="text-center py-4 text-gray-500 dark:text-gray-400">
          No tasks yet. Add one above!
        </p>
      )}
    </div>
  );
}
