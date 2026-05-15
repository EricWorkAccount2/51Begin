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
            <Link to="/movies/category/now_playing">Movies</Link>
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
          
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
