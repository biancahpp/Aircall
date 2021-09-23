import React from 'react'
import { FaDotCircle, FaSun, FaUser } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi'
import { BiDialpadAlt } from 'react-icons/bi';

export default function Footer({ active, setActive }) {
  return (
    <footer>
      <div className="icons-wrapper">
        <div className="icon-wrapper">
          <FiPhone className="icon" onClick={() => setActive('activity')}/>
          {active === 'activity' && <div className="underline"></div>}
        </div>
        <div className="icon-wrapper">
          <FaUser className="icon" onClick={() => setActive('contacts')}/>
          {active === 'contacts' && <div className="underline"></div>}
        </div>
      </div>
      <div id="dialpad-outer-wrapper">
        <div id="dialpad-wrapper">
          <BiDialpadAlt className="icon" onClick={() => setActive('keypad')}/>
        </div>
      </div>
      <div className="icons-wrapper">
        <div className="icon-wrapper">
          <FaSun className="icon" onClick={() => setActive('favorites')}/>
          {active === 'favorites' && <div className="underline"></div>}
        </div>
        <div className="icon-wrapper">
          <FaDotCircle className="icon" onClick={() => setActive('status')} id="icon-status"/>
          {active === 'status' && <div className="underline"></div>}
        </div>
      </div>
    </footer>
  )
}
