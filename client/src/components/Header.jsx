
export default function Header({ search, setSearch, setPage }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-700 bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-400 pr-9">VGArchive</h1>

      <div className="ml-auto w-96">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 bg-gray-800 text-white rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
