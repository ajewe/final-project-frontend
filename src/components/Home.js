import React from 'react';
import { useSelector } from 'react-redux';
import { LeftNavigation } from './material-ui/LeftNavigation'
import { EntryCard } from './material-ui/EntryCard'

export const Home = () => {
  const allLogs = useSelector(state => state.logs)

  const findLatestBook = () => {
    for (const property in allLogs) {
      // console.log(`${property}: ${allLogs[property]}`)
      allLogs[property].map((book) => {
        console.log(book.dateCreated)
      })
    }
  }
  const currentBook = () => {
    findLatestBook(allLogs)
  }
  
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
            <button onClick={() => findLatestBook()} >
              Click Me
            </button>

            {allLogs.book2.length === 0 ? 
              'No Entries'
              :
              <div className="entry-card-div">
                {allLogs.book2.map((entry, i) => {
                  return (
                    <EntryCard
                      key={i}
                      index={i}
                      quickInfo={entry.quickInfo}
                      procedures={entry.procedures}
                      dateCreated={entry.dateCreated}
                      timeCreated={entry.timeCreated}
                    />
                  )
                })}
              </div>
            }
            {/* if nothing posted, list most recent Book {number} with entry(ies) */}
            {/* if next entry is new book, list new Book {number} with entry(ies), repeat for x number of logs */}
          </div>
        </div>
      </div>
    </>
  )
}