import React from 'react'
import { FaDotCircle, FaPhoneAlt, FaSun, FaUser } from 'react-icons/fa';
import { BiDialpadAlt } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer>
      <div class="icons-wrapper">
        <FaPhoneAlt className="icon"/>
        <FaUser className="icon"/>
      </div>
      <div id="dialpad-outer-wrapper">
        <div id="dialpad-wrapper">
          <BiDialpadAlt className="icon"/>
        </div>
      </div>
      <div class="icons-wrapper">
        <FaSun className="icon"/>
        <FaDotCircle className="icon" id="icon-status"/>
      </div>
    </footer>
  )
}
