
export default function Sidebar({ category, setCategory, setPage, setSearch }) {
  const categories = [
    { label: 'All Games', value: '' },
    { label: 'Highly Rated', value: 'HRated' },
    { label: 'Recent Releases', value: 'recent' },
  ];

  const handleCategoryClick = (value) => {
    setCategory(value);
    setSearch('')
    setPage(1);
  };

  return (
    <div className="p-4 space-y-3">
      <h2 className="text-sm font-bold mb-4 text-white">Categories</h2>
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`w-full text-left px-4 py-2 rounded transition-colors ${
            category === cat.value 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => handleCategoryClick(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
