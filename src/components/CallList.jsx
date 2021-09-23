import React from 'react';
import CallCard from './CallCard.jsx';
import { v4 as uuidv4 } from 'uuid';

export default function CallList({ calls, archiveOneCall, type }) {
  const getDates = () => {
    return [...new Set(calls.map(call => new Date(call.created_at).toLocaleString('default' , {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    })))]
  }

  const filterByDate = (date) => {
    return calls.filter(call => new Date(call.created_at).toLocaleString('default' , {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    }) === date)
  }

  return (
    <div className="container-view">
      {
      getDates().map(date => 
        <div key ={uuidv4()} className="calls-day">
          <div className="call-date">
            <span>{date}</span>
          </div>
          {filterByDate(date).map(call => <CallCard call={call} key={call.id} archiveOneCall={archiveOneCall} type={type}/> )}
        </div>)
      }
    </div>
  )
}
