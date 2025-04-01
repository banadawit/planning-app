export default function ProgressBar({ tasks }) {
    const progress = tasks.length
      ? Math.round((tasks.filter((t) => t.completed).length / tasks.length) * 100)
      : 0;
  
    return (
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {progress}% completed ({tasks.filter((t) => t.completed).length}/{tasks.length})
        </p>
      </div>
    );
  }