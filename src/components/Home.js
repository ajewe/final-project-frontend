import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LeftNavigation } from './material-ui/LeftNavigation'
import { EntryCard } from './material-ui/EntryCard'

export const Home = () => {
  const allLogs = useSelector(state => state.logs)
  let logsSortedByDate = []

  const [ recentLogs, setRecentLogs ] = React.useState([])

  const findLatestLogs = () => {
    logsSortedByDate = allLogs.sort((a, b) => {
      return b.lastUpdated - a.lastUpdated
    })

    for (let i = 0; i < 6; i++) {
      if (!logsSortedByDate[i]) {
        setRecentLogs([...recentLogs])
      } else {
        recentLogs.push(logsSortedByDate[i])
      }
    }
    setRecentLogs([...recentLogs])
  }

  useEffect(() => findLatestLogs(), []);
  
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
            <button onClick={() => console.log(recentLogs)} >
              Click Me
            </button>

            {recentLogs.length === 0 ? 
              'No Entries'
              :
              <div className="entry-card-div">
                {recentLogs.map((log, i) => {
                  return (
                    <EntryCard
                      key={ i }
                      index={ i }
                      bookName={ log.bookName }
                      quickInfo={ log.quickInfo }
                      procedures={ log.procedures }
                      lastUpdated={ log.lastUpdated }
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