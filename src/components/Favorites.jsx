import React, { useContext } from 'react';
import { AppContext } from '../context/Context';
import '../style/App.css';

const Favorites = () => {
  const { state, removeFavorite } = useContext(AppContext);

  const handleRemoveClick = (photo) => {
    removeFavorite(photo);
    document.getElementById(`heart-${photo.id}`).classList.add('animate-like');
    setTimeout(() => {
      document.getElementById(`heart-${photo.id}`).classList.remove('animate-like');
    }, 300);
  };

  return (
    <div className="favorites">
      <h2>❤️ Favoritas ❤️</h2>
      <div className="photos">
        {state.favorites.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.src.medium} alt={photo.photographer} />
            <p>{photo.photographer}</p>
            <button
              id={`heart-${photo.id}`}
              onClick={() => handleRemoveClick(photo)}
            >
              ❤️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;




