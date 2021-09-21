import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Content from '../components/Content.jsx';
import { getCalls } from '../services/apiCalls.js';

export default function Landing() {
  const [calls, setCalls] = useState(null);

  useEffect(() => {
    getCalls().then(res => setCalls(res))
  }, [])

  return (
    <div className='container'>
      <Header/>
      <Content calls={calls}/>
      <Footer />
    </div>
  )
}
