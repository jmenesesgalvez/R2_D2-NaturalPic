import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    query: '',
    photos: [],
    favorites: [],
  });

  const addFavorite = (photo) => {
    setState((prevState) => ({
      ...prevState,
      favorites: [...prevState.favorites, photo],
    }));
  };

  const removeFavorite = (photo) => {
    setState((prevState) => ({
      ...prevState,
      favorites: prevState.favorites.filter((fav) => fav.id !== photo.id),
    }));
  };

  const isFavorite = (photo) => {
    return state.favorites.some((fav) => fav.id === photo.id);
  };

  return (
    <AppContext.Provider value={{ state, setState, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </AppContext.Provider>
  );
};
