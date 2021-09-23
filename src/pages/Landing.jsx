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

  const archiveCall = async (id) => {
    await updateCallArchive(id, true)
    const filtered = notArchivedCalls.filter(call => call.id !== id)
    setNotArchivedCalls(filtered)
  }
  // From the reference image I'm not sure by what I should group the calls by to include the number beside the name so I didn't group them for now

  useEffect(() => {
    getCalls().then(res => {
      setAllCalls(res)
      setNotArchivedCalls(res.filter(call => !call.is_archived))
    })
  }, [])

  return (
    <div className='container'>
      <Activity allCalls={allCalls} notArchivedCalls={notArchivedCalls} archiveAllCalls={archiveAllCalls} archiveOneCall={archiveCall}/>
      <Footer active={toggleFooter} setActive={setToggleFooter}/>
    </div>
  )
}
