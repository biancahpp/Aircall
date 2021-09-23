import React from 'react'
import { BiArchive } from 'react-icons/bi'

export default function Details({ call, archiveOneCall, type }) {
  return (
    <div className="details">
      <p className="call-card-via">
        {call.call_type}
      </p>
      <p className="call-card-via">
        {new Date(+call.duration * 1000).toISOString().substr(11, 8)}
      </p>
      {type === 'inbox' && <BiArchive className="details-icon" onClick={() => archiveOneCall(call.id)}/>}
    </div>
  )
}
