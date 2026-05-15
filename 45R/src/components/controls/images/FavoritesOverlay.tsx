import { ICON_SIZE, type ImageCell } from '@/core';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useUserContext } from '@/hooks';

type FavoritesOverlayProps = {
  item: ImageCell;
};

export const FavoritesOverlay = ({ item }: FavoritesOverlayProps) => {
  const { favorites, toggleFavorite } = useUserContext();

  return (
    <button
    className="absolute top-1 right-1 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition"
      onClick={(event) => {
      event.stopPropagation();
        toggleFavorite(item);
    }}
  >
    {favorites.has(item.id) ? (
      <FaHeart className="text-blue-500" size={ICON_SIZE} />
    ) : (
      <FaRegHeart className="text-white" size={ICON_SIZE} />
    )}
  </button>
  );
}