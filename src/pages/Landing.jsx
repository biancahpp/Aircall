import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Content from '../components/Content.jsx';
import { getCalls, updateCallArchive } from '../services/apiCalls.js';

export default function Landing() {
  const [allCalls, setAllCalls] = useState([]);
  const [notArchivedCalls, setNotArchivedCalls] = useState([]);

  const archiveAllCalls = async () => {
    notArchivedCalls.forEach(async (call) => {
      await updateCallArchive(call.id, true)
    })
    setNotArchivedCalls([])
  }

  useEffect(() => {
    getCalls().then(res => {
      setAllCalls(res)
      setNotArchivedCalls(res.filter(call => !call.is_archived))
    })
  }, [])

  return (
    <div className='container'>
      <Header/>
      {notArchivedCalls && notArchivedCalls.length ? <Content calls={notArchivedCalls} archiveAllCalls={archiveAllCalls}/> : <div> No calls </div>}
      <Footer />
    </div>
  )
}
