import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";
import CategoryFilter from "./components/CategoryFilter";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [activeCategory, setActiveCategory] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const filteredTasks =
    activeCategory === "all"
      ? tasks
      : tasks.filter((t) => t.category === activeCategory);

  const addTask = (newTask) => setTasks([...tasks, newTask]);
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const toggleComplete = (id) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 flex items-center justify-center p-4 ${
        darkMode
          ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-900"
      }`}
    >
      <div className="w-full max-w-2xl bg-white/90 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all border border-gray-200/30 dark:border-gray-700/30">
        {/* Enhanced Header */}
        <div
          className={`p-8 ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-700 border-b border-gray-700/50"
              : "bg-gradient-to-r from-indigo-500 to-purple-500 border-b border-indigo-400/30"
          } rounded-t-3xl flex justify-between items-center`}
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
              My Planner Pro
            </h1>
            <p className="text-sm mt-1 text-indigo-100/80 dark:text-gray-300/80">
              {tasks.filter((t) => !t.completed).length} pending tasks
            </p>
          </div>
          <ThemeToggle
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
            className="hover:scale-105 transition-transform"
          />
        </div>

        {/* Content Area */}
        <div className="p-8 space-y-6">
          {/* Elevated Form Card */}
          <div
            className={`p-6 rounded-xl ${
              darkMode
                ? "bg-gray-700/40 border border-gray-600/30"
                : "bg-white border border-gray-200/70"
            } shadow-sm`}
          >
            <TaskForm addTask={addTask} />
          </div>

          {/* <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          /> */}
          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            darkMode={darkMode}
          />

          {/* Animated Progress Bar */}
          <div className="animate-fade-in">
            <ProgressBar tasks={tasks} />
          </div>

          {/* Refined Task List Container */}
          <div
            className={`rounded-lg overflow-hidden ${
              darkMode
                ? "bg-gray-700/30 border border-gray-600/20"
                : "bg-white/80 border border-gray-200/50"
            }`}
          >
            <TaskList
              tasks={filteredTasks}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          </div>
        </div>

        {/* Subtle Footer */}
        <div
          className={`px-6 py-3 text-center text-xs ${
            darkMode
              ? "text-gray-400 bg-gray-900/20"
              : "text-gray-500 bg-gray-100/50"
          }`}
        >
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
