import React, { useMemo } from 'react'
import CallCard from './CallCard.jsx'
import { v4 as uuidv4 } from 'uuid';
import { BiArchive } from 'react-icons/bi';

export default function Content({ calls, archiveAllCalls }) {

  console.log(calls); 
  const getDates = () => {
    console.log('executed');
    return [...new Set(calls.map(call => new Date(call.created_at).toLocaleString('default' , {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    })))]
  }

  const dates = useMemo(() => getDates(), [calls]);

  const filterByDate = (date) => {
    return calls.filter(call => new Date(call.created_at).toLocaleString('default' , {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    }) === date)
  }

  return (
    <div className="container-view">
      <div onClick={() => archiveAllCalls()} className="call-card" id="archive-calls">
        <BiArchive className="call-card-icon"/>
        <span>
          Archive All Calls
        </span>

      </div>
      {
      dates.map(date => 
        <div key ={uuidv4()} className="calls-day">
          <div className="call-date">
            <span>{date}</span>
          </div>
          {filterByDate(date).map(call => <CallCard call={call} key={call.id}/> )}
        </div>)
      }
    </div>
  )
}
