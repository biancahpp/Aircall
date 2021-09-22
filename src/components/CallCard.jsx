import React from 'react';
import { FiPhoneIncoming, FiPhoneOutgoing } from 'react-icons/fi'

export default function CallCard({call}) {
  return (
    <div className="call-card">
      <div className="call-card-left">
        { call.direction === 'inbound'? <FiPhoneIncoming className="call-card-icon"/> : <FiPhoneOutgoing className="call-card-icon"/>}
        <div>
          <p className="call-card-name">{call.from}</p>
          <p className="call-card-via">tried to call on {call.via}</p>
        </div>
      </div>
      <div className="call-card-right">
        <span>
          {new Date(call.created_at).toLocaleString('default', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })}
        </span>        
      </div>
    </div>
  )
}
