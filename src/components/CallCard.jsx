import React from 'react';
import { FiPhoneIncoming, FiPhoneOutgoing } from 'react-icons/fi'

export default function CallCard({call}) {
  return (
    <div className="call-card">
      <div>
        { call.direction === 'inbound'? <FiPhoneIncoming /> : <FiPhoneOutgoing />}
      </div>
      <div>
        <p>{call.from}</p>
        <p>tried to call on {call.via}</p>
      </div>
      <div>
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
