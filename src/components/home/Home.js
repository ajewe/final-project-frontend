import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { LeftNavigation } from '../navigation/LeftNavigation'
import { fetchBooks } from '../../redux/actions/booksActions'
import { fetchLogs } from '../../redux/actions/logsActions'
import { EntryCard } from './EntryCard'

export const Home = () => {
  const dispatch = useDispatch()
  const allLogs = useSelector( state => state.logs )
  const user = useSelector ( state => state.user )
  const userToken = user.token
  const [ recentLogs, setRecentLogs ] = React.useState([])
  
  const findLatestLogs = () => {
    let logsSortedByDate = []
    let firstFewLogs = []
    logsSortedByDate = allLogs.sort((a, b) => {
      return b.last_updated - a.last_updated
    })

    for (let i = 0; i < 10; i++) {
      if (!logsSortedByDate[i]) {
        setRecentLogs(firstFewLogs)
      } else {
        firstFewLogs.push(logsSortedByDate[i])
      }
    }
    setRecentLogs(firstFewLogs)
  }

  useEffect(() => {
    dispatch(fetchLogs(userToken))
    dispatch(fetchBooks(userToken))
  }, []);

  useEffect(() => {
    findLatestLogs()
  }, [ allLogs ]);

  return (
    <>
      <LeftNavigation 
        userToken={ userToken }
        user={ user }
      />
      {/* {allBooksFromState.length === 0 ? <p>no books</p> : <p>{allBooksFromState[0].book}</p>} */}
      <div id="home-container">
        <h1 className="headline-text">
          { user.firstName ? `Welcome ${user.firstName}!` : "Welcome!"}
        </h1>
        <div id="home-recent-logs">
          <h3>Recent Logs:</h3>
          <div>
            {recentLogs.length === 0 ? 
              'No Entries'
              :
              <div className="entry-card-container-div">
                {recentLogs.map((log, i) => {
                  return (
                    <div className="entry-card-div">
                      <Link to={`/view-entry/${ log.id }`} 
                            className="link"
                      >
                        <EntryCard
                          key={ i }
                          index={ i }
                          bookName={ log.book }
                          rxnSketch={ log.rxn_sketch }
                          quickInfo={ log.quick_info }
                          lastUpdated={ log.last_updated }
                          bookEntryNumber={ log.book_entry_number }
                        />
                      </Link>
                    </div>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}