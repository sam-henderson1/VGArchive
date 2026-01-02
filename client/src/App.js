import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GameGrid from './components/GameGrid';
import { useState, useEffect } from 'react';

function App() {
  // State management
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  // Fetch games from backend
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        // query params
        const params = new URLSearchParams({
          page: page,
          category: category,
        });
        
        if (search) {
          params.append('search', search);
          setCategory('');
        }

        const response = await fetch(`http://localhost:5000/api/games?${params}`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
        setGames([]);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search - wait 300ms after user stops typing
    const timer = setTimeout(() => {
      fetchGames();
    }, 300);

    return () => clearTimeout(timer);
  }, [category, search, page]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header 
        search={search} 
        setSearch={setSearch}
        setPage={setPage}
      />

      {/*Body*/}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 border-r border-gray-700 overflow-y-auto bg-gray-900">
          <Sidebar 
            category={category} 
            setCategory={setCategory}
            setSearch={setSearch}
            setPage={setPage}
          />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <GameGrid games={games} loading={loading} />
          {/*Pagination*/}
          {games.length > 0 && (
            <div className="flex justify-center mt-8 gap-4 items-center">
              <button 
                onClick={() => setPage(page - 1)} 
                disabled={page === 1}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <span className="text-white">Page {page}</span>
              <button 
                onClick={() => setPage(page + 1)}
                disabled={games.length < 21}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;