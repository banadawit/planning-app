export default function CategoryFilter({ 
  activeCategory, 
  setActiveCategory,
  darkMode = false 
}) {
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
              ? darkMode
                ? "bg-blue-800/90 text-blue-100 shadow-inner"
                : "bg-blue-600 text-white shadow-sm"
              : darkMode
                ? "bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 border border-gray-600/30"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/80 shadow-xs"
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