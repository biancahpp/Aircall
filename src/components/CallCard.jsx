import React, { useState } from 'react';
import IncomingIcon from '../icons/IncomingIcon.jsx';
import OutgoingIcon from '../icons/OutgoingIcon.jsx';
import Details from './Details.jsx';

export default function CallCard({ call, archiveOneCall, type }) {
  const [toggleArchive, setToggleArchive] = useState(false);
  return (
    <div className="call-card" onClick={() => setToggleArchive(!toggleArchive)}>
      <div className="call-card-top">
        <div className="call-card-left">
          { call.direction === 'inbound'? <IncomingIcon /> : <OutgoingIcon />}
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
      { toggleArchive &&
        <Details archiveOneCall={archiveOneCall} call={call} type={type}/>
      }
    </div>
  )
}
