export default function ThemeToggle({ darkMode, toggleDarkMode }) {
    return (
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    );
  }