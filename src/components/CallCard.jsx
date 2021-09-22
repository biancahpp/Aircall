import React, { useState } from 'react';
import { FiPhoneIncoming, FiPhoneOutgoing } from 'react-icons/fi';
import { BiArchive } from 'react-icons/bi';
import { updateCallArchive } from '../services/apiCalls';

export default function CallCard({ call, archiveCall }) {
  const [toggleArchive, setToggleArchive] = useState(false);

  const archiveThisCall = async () => {
    const res = await updateCallArchive(call.id, true);
    res.is_archived && archiveCall(call.id)
  }

  return (
    <div className="call-card" onClick={() => setToggleArchive(!toggleArchive)}>
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
      { toggleArchive &&
        <div className="call-card-archive" onClick={archiveThisCall}>
          <BiArchive />
        </div>
      }
    </div>
  )
}
