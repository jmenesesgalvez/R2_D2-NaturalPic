import React, { useContext } from 'react';
import { AppContext } from '../context/Context';
import '../style/App.css';

const Favorites = () => {
  const { state, removeFavorite } = useContext(AppContext);

  return (
    <div className="favorites">
      <h2>❤️ FAVORITAS ❤️</h2>
      <div className="photos">
        {state.favorites.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.src.medium} alt={photo.photographer} />
            <p>{photo.photographer}</p>
            <button onClick={() => removeFavorite(photo)}>
              ❤️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;



