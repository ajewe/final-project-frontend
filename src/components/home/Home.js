import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LeftNavigation } from '../leftNavigation/LeftNavigation'
import { fetchBooks } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { EntryCard } from './EntryCard'

export const Home = () => {
  const dispatch = useDispatch()
  const allLogs = useSelector( state => state.logs )
  let logsSortedByDate = []
  const [ recentLogs, setRecentLogs ] = React.useState([])
  // const [ allBooks, setAllBooks ] = React.useState([])
  const allUsers = useSelector( state => state.users )

  const findLatestLogs = () => {
    logsSortedByDate = allLogs.sort((a, b) => {
      return b.lastUpdated - a.lastUpdated
    })

    for (let i = 0; i < 10; i++) {
      if (!logsSortedByDate[i]) {
        setRecentLogs([...recentLogs])
      } else {
        recentLogs.push(logsSortedByDate[i])
      }
    }
    setRecentLogs([...recentLogs])
  }
  useEffect(() => {
    dispatch(fetchBooks())
    findLatestLogs()
  }, []);

  // const findAllBooks = () => {
  //   let bookArr = []
  //   //go through allLogs, check bookName for each, if new bookName, push to array
  //   for (let i = 0; i < allLogs.length; i++) {
  //     if (!bookArr.includes(allLogs[i].bookName)) {
  //       bookArr.push(allLogs[i].bookName)
  //     }
  //   }
  //   setAllBooks(bookArr)
  // // }
  // useEffect(() => findAllBooks(), []);

  return (
    <>
      <LeftNavigation />
      <div id="home-container">
        <h1>Welcome User</h1>
        <div id="home-announcements">
          Lab Announcements:
          {/* and then if there are announcements it would show latest 3 announcements, else it would say  */}
            <div>
              {allUsers.map(user => {
                return(
                  <p>{user.first_name}</p>
                )
              })}
            </div>
        </div> 
        <div id="home-recent-logs">
          Recent Logs:
          <div>

            {recentLogs.length === 0 ? 
              'No Entries'
              :
              <div className="entry-card-container-div">
                {recentLogs.map((log, i) => {
                  return (
                    <div className="entry-card-div">
                      <Link to={`/view-entry/${ log.logId }`} className="link">
                        <EntryCard
                          key={ i }
                          index={ i }
                          bookName={ log.bookName }
                          rxnSketch={ log.rxnSketch }
                          quickInfo={ log.quickInfo }
                          procedures={ log.procedures }
                          lastUpdated={ log.lastUpdated }
                          bookEntryNumber={ log.bookEntryNumber }
                        />
                      </Link>
                    </div>
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