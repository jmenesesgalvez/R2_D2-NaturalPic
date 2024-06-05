import React, { useContext } from 'react';
import axios from 'axios';
import { AppContext } from './context/Context';
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import Header from './components/Header';

const App = () => {
  const { state, setState, addFavorite, removeFavorite, isFavorite } = useContext(AppContext);

  if (!state) {
    return <div>Loading...</div>;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        headers: {
          Authorization: 'gj7DgIKW361TXiXlxf42n0NPuAvnLVK6T67u4dLRR8zDj8v9Ka7S1sJY',
        },
        params: {
          query: state.query,
          per_page: 10,
        },
      });
      setState({ ...state, photos: response.data.photos });
    } catch (error) {
      console.error('Error fetching data from Pexels API', error);
    }
  };

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1><b>SELECCIONA TUS FOTOS FAVORITAS</b></h1>
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    value={state.query}
                    onChange={(e) => setState({ ...state, query: e.target.value })}
                    placeholder="Ingresa tu Busqueda ... "
                  />
                  <button type="submit">Buscar</button>
                </form>
                <div className="photos">
                  {state.photos.map((photo) => (
                    <div key={photo.id} className="photo">
                      <img src={photo.src.medium} alt={photo.photographer} />
                      <p>{photo.photographer}</p>
                      <button onClick={() => (isFavorite(photo) ? removeFavorite(photo) : addFavorite(photo))}>
                        {isFavorite(photo) ? '❤️' : '♡'}
                      </button>
                    </div>
                  ))}
                </div>
              </>
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


