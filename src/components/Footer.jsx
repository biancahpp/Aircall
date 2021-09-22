import React from 'react'
import { FaDotCircle, FaSun, FaUser } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi'
import { BiDialpadAlt } from 'react-icons/bi';

export default function Footer({ active, setActive }) {
  return (
    <footer>
      <div className="icons-wrapper">
        <FiPhone className={`${active === 'activity' ? 'icon active' : 'icon'}`} onClick={() => setActive('activity')}/>
        <FaUser className={`${active === 'contacts' ? 'icon active' : 'icon'}`} onClick={() => setActive('contacts')}/>
      </div>
      <div id="dialpad-outer-wrapper">
        <div id="dialpad-wrapper">
          <BiDialpadAlt className={`${active === 'keypad' ? 'icon active' : 'icon'}`} onClick={() => setActive('keypad')}/>
        </div>
      </div>
      <div className="icons-wrapper">
        <FaSun className={`${active === 'favorites' ? 'icon active' : 'icon'}`} onClick={() => setActive('favorites')}/>
        <FaDotCircle className={`${active === 'status' ? 'icon active' : 'icon'}`} onClick={() => setActive('status')} id="icon-status"/>
      </div>
    </footer>
  )
}
