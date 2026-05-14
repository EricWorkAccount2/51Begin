import { Link } from '@/components';
import { ICON_SIZE } from '@/core';
import { useUserContext } from '@/hooks';
import { FaRegHeart } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const { userName, favorites } = useUserContext();
  return (
    <header className="border-b border-gray-700 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl space-y-2 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold">TMDB Explorer</h1>
            <Link to="/movies/category/now_playing" match={['/movies/category/:category']}>
              Movies
            </Link>
            <Link to="/tv/category/airing_today" match={['/tv/category/:category']}>
              TV
            </Link>
            <Link to="/trending/movies" match={['/trending/:category']}>
              Trending
            </Link>
            <Link to="/genre/movie/action" match={['/genre/:mediaType/:genre']}>
              Genre
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <Link to="/search">Search</Link>
          </div>
          <div className="flex items-center">
            <h1 className="mr-4 text-xl text-gray-300">{userName}</h1>
            <button onClick={() => navigate('/favorites')} className="relative rounded-full p-2 transition hover:bg-gray-700">
              <FaRegHeart size={ICON_SIZE} />
              {favorites.size > 0 && (
                <span className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  {favorites.size}
                </span>
              )}
            </button>
            <button onClick={() => navigate('/settings')} className="relative rounded-full p-2 transition hover:bg-gray-700">
              <GoGear size={ICON_SIZE} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
