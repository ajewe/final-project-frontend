import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { LeftNavigation } from './navigation/LeftNavigation'
import { EntryCard } from './home/EntryCard'

export const ViewAllBookEntries = props => {
  const user = useSelector( state => state.user )
  const userToken = user.token
  const allLogs = useSelector( state => state.logs )
  const [ logsFromBook, setLogsFromBook ] = React.useState([])

  const findSelectedBook = state => {
    return state.books.find(b => b.id == props.match.params.id)
  }
  const selectedBook = useSelector(state => findSelectedBook(state))

  const selectLogsFromBook = () => {
    let arrOfSelectedLogs = []

    for (let i = 0; i < allLogs.length; i ++) {
      if ( allLogs[i].book_id == props.match.params.id) {
        arrOfSelectedLogs.push(allLogs[i])
      }
    }
    setLogsFromBook(arrOfSelectedLogs)
  }

  useEffect(()=> {
    selectLogsFromBook()
  }, [selectedBook])
  
  return (
    <>
      <LeftNavigation user={ user } 
                      userToken={ userToken }/>
      <div className="view-all-bk-entries">
        <h1>{ selectedBook.book }</h1>
        <div>
          { logsFromBook.length === 0 ? 
            "No Entries Yet!" 
            : 
            <div className="entry-card-container-div">
              {logsFromBook.map((log, i) => {
                return (
                  <div className="entry-card-div">
                    <Link to={`/view-entry/${ log.id }`} 
                          className="link">
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
    </>
  )
}