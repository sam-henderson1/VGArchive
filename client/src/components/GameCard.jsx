
export default function GameCard({game}) {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800 hover:scale-105 transition-transform cursor-pointer">
      <img 
        src={game.background_image || 'https://via.placeholder.com/400x225'} 
        alt={game.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate text-white">
          {game.name}
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          Metacritic: {game.metacritic || 'N/A'}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Released: {game.released || 'TBA'}
        </p>
      </div>
    </div>
  );
}
