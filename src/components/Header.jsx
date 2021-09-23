import React from 'react';
import AircallLogo from './AircallLogo.jsx';
import { FiSliders } from 'react-icons/fi';

const Header = ({title, setToggle, toggle}) => {
  return (
    <header>
      <div className="header-left">
        <AircallLogo />
        <h1>{title}</h1>
      </div>
      <div className="header-right">
        <button onClick={() => setToggle('inbox')} className={`header-btn ${toggle === 'inbox' ? 'header-active' : 'header-inactive'}`}>
          <span className="header-btn-content">
            Inbox
          </span>
        </button>

        <button onClick={() => setToggle('all')} className={`header-btn ${toggle === 'all' ? 'header-active' : 'header-inactive'}`}>
          <span className="header-btn-content">
            All calls
          </span>
        </button>

        <button className="header-btn">
          <FiSliders className="header-btn-content"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
