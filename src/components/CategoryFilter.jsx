export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  const categories = [
    { id: "all", name: "All", emoji: "🌐" },
    { id: "learning", name: "Learning", emoji: "📚" },
    { id: "work", name: "Work", emoji: "💼" },
    { id: "personal", name: "Personal", emoji: "🏠" },
  ];

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeCategory === category.id
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
          aria-label={`Filter by ${category.name}`}
        >
          <span className="mr-1.5">{category.emoji}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}
