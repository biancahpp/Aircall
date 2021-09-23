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
        <button onClick={() => setToggle('inbox')} className={`${toggle === 'inbox' ? 'header-active' : 'header-inactive'}`}>Inbox</button>
        <button onClick={() => setToggle('all')} className={`${toggle === 'all' ? 'header-active' : 'header-inactive'}`}>All calls</button>
        <button>
          <FiSliders />
        </button>
      </div>
    </header>
  );
};

export default Header;
