import React from 'react';
import AircallLogo from './AircallLogo.jsx';
import { FiSliders } from 'react-icons/fi';

const Header = ({title}) => {
  return (
    <header>
      <div className="header-left">
        <AircallLogo />
        <h1>Activity</h1>
      </div>
      <div className="header-right">
        <button>Inbox</button>
        <button>All calls</button>
        <button>
          <FiSliders />
        </button>
      </div>
    </header>
  );
};

export default Header;
