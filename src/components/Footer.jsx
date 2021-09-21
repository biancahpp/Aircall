import React from 'react'
import { FaDotCircle, FaPhoneAlt, FaSun, FaUser } from 'react-icons/fa';
import { MdDialpad } from 'react-icons/md';

export default function Footer() {
  return (
    <footer>
      <FaPhoneAlt />
      <FaUser />
      <div id="dialpad-wrapper">
        <MdDialpad />
      </div>
      <FaSun />
      <FaDotCircle />
    </footer>
  )
}
