import React from 'react';
import { useSelector } from 'react-redux';
import { LeftNavigation } from './material-ui/LeftNavigation'

export const Home = () => {
  const allEntries = useSelector(state => state.entries)

  return (
    <>
      <LeftNavigation />
      <div id="home-container">
        <h1>Welcome User</h1>
        <div id="home-announcements">
          Lab Announcements:
          {/* and then if there are announcements it would show latest 3 announcements, else it would say  */}
        </div> 
        <div id="home-recent-logs">
          Recent Logs:
          <div>
            {allEntries.length == 0 ? 'No Entries' : allEntries.quickInfo}
            {/* if nothing posted, list most recent Book {number} with entry(ies) */}
            {/* if next entry is new book, list new Book {number} with entry(ies), repeat for x number of logs */}
          </div>
        </div>
      </div>
    </>
  )
}