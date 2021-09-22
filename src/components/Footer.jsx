import React from 'react'
import { FaDotCircle, FaSun, FaUser } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi'
import { BiDialpadAlt } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer>
      <div className="icons-wrapper">
        <FiPhone className="icon"/>
        <FaUser className="icon"/>
      </div>
      <div id="dialpad-outer-wrapper">
        <div id="dialpad-wrapper">
          <BiDialpadAlt className="icon"/>
        </div>
      </div>
      <div className="icons-wrapper">
        <FaSun className="icon"/>
        <FaDotCircle className="icon" id="icon-status"/>
      </div>
    </footer>
  )
}
