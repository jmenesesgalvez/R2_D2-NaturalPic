import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="ribbon">DESAFIO 2 - NATURAL PIC</div>
      <nav>
        <Link to="/"><b>Home</b></Link>
        <Link to="/favorites"><b>Favoritas</b></Link>
      </nav>
    </div>
  );
};

export default Header;

