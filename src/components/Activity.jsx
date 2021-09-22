import React, { useState } from 'react';
import CallList from './CallList.jsx';
import Header from './Header.jsx';
import { BiArchive } from 'react-icons/bi';

export default function Activity({allCalls, notArchivedCalls, archiveAllCalls}) {

  const [toggleHeader, setToggleHeader] = useState('inbox');
  return (
    <div>
      <Header title={'activity'} setToggle={setToggleHeader} toggle={toggleHeader}/>
      {toggleHeader === 'inbox' ? <><div onClick={() => archiveAllCalls()} className="call-card" id="archive-calls">
        <BiArchive className="call-card-icon"/>
        <span>
          Archive All Calls
        </span>
      </div>
      {notArchivedCalls && notArchivedCalls.length ? <CallList calls={notArchivedCalls}/> : <div> No calls </div>}
      </>
      :
      allCalls && allCalls.length ? <CallList calls={allCalls}/> : <div> No calls </div>
    }
      
    </div>
  )
}
