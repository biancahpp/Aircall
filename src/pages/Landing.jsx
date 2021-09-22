import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer.jsx';
import { getCalls, updateCallArchive } from '../services/apiCalls.js';
import Activity from '../components/Activity.jsx';

export default function Landing() {
  const [allCalls, setAllCalls] = useState([]);
  const [notArchivedCalls, setNotArchivedCalls] = useState([]);
  const [toggleFooter, setToggleFooter] = useState('activity');

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
      <Activity allCalls={allCalls} notArchivedCalls={notArchivedCalls} archiveAllCalls={archiveAllCalls}/>
      <Footer active={toggleFooter} setActive={setToggleFooter}/>
    </div>
  )
}
