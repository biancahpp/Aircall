import React, { useMemo, useState } from 'react'
import CallCard from './CallCard.jsx'
import { v4 as uuidv4 } from 'uuid';

export default function CallList({ calls }) {

  console.log(calls);
  const [callsList, setCallsList] = useState(calls);
  const getDates = () => {
    console.log('executed');
    return [...new Set(callsList.map(call => new Date(call.created_at).toLocaleString('default' , {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    })))]
  }

  const archiveCall = (id) => {
    const filtered = callsList.filter(call => call.id !== id)
    setCallsList(filtered)
  }

  const dates = useMemo(() => getDates(), [callsList]);

  const filterByDate = (date) => {
    return callsList.filter(call => new Date(call.created_at).toLocaleString('default' , {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    }) === date)
  }

  return (
    <div className="container-view">
      {
      dates.map(date => 
        <div key ={uuidv4()} className="calls-day">
          <div className="call-date">
            <span>{date}</span>
          </div>
          {filterByDate(date).map(call => <CallCard call={call} key={call.id} archiveCall={archiveCall}/> )}
        </div>)
      }
    </div>
  )
}
