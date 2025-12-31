
export default function Header({ search, setSearch, sort, setSort, setPage }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setPage(1);
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-700 bg-gray-900">
      <h1 className="text-xl font-bold text-blue-400">VGArchive</h1>

      <div className="flex-1 mx-8">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 bg-gray-800 text-white rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <select 
        value={sort} 
        onChange={handleSortChange}
        className="w-40 px-4 py-2 bg-gray-800 text-white rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="-metacritic">Metacritic (High)</option>
        <option value="metacritic">Metacritic (Low)</option>
        <option value="-released">Release Date (New)</option>
        <option value="released">Release Date (Old)</option>
        <option value="-rating">Rating (High)</option>
        <option value="rating">Rating (Low)</option>
      </select>
    </div>
  );
}
