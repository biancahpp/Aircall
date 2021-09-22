import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Content from '../components/Content.jsx';
import { getCalls, updateCallArchive } from '../services/apiCalls.js';

export default function Landing() {
  const [calls, setCalls] = useState(null);

  const archiveAllCalls = async () => {
    calls.forEach(async (call) => {
      await updateCallArchive(call.id, {is_archived: true})
    })
  }

  useEffect(() => {
    getCalls().then(res => setCalls(res))
  }, [])

  return (
    <div className='container'>
      <Header/>
      {calls ? <Content calls={calls} archiveAllCalls={archiveAllCalls}/> : <div> No calls </div>}
      <Footer />
    </div>
  )
}
