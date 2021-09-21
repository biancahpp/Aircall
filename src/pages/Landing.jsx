import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Content from '../components/Content.jsx';

export default function Landing() {

  const [calls, setCalls] = useState(null);

  return (
    <div className='container'>
      <Header/>
      <Content />
      <Footer />
    </div>
  )
}
