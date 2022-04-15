import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  ReactionEntryCard,
  ReactionEntryCardContainer,
} from "./common/ReactionEntryCard";
import { LeftNavigationContainer } from "./navigation/LeftNavigation.container";
import { fetchBooks } from "../redux/actions/booksActions";
import { fetchLogs } from "../redux/actions/logsActions";

export const Home = () => {
  const dispatch = useDispatch();
  const allLogs = useSelector((state) => state.logs);
  const user = useSelector((state) => state.user);
  const userToken = user.token;
  const [recentLogs, setRecentLogs] = React.useState([]);

  const findLatestLogs = () => {
    let logsSortedByDate = [];
    let firstFewLogs = [];

    logsSortedByDate = allLogs.sort((a, b) => {
      return b.last_updated - a.last_updated;
    });

    for (let i = 0; i < 10; i++) {
      if (!!logsSortedByDate[i]) {
        firstFewLogs.push(logsSortedByDate[i]);
      } else {
        setRecentLogs(firstFewLogs);
      }
    }
    setRecentLogs(firstFewLogs);
  };

  useEffect(() => {
    dispatch(fetchLogs(userToken));
    dispatch(fetchBooks(userToken));
  }, []);

  useEffect(() => {
    findLatestLogs();
  }, [allLogs]);

  return (
    <LeftNavigationContainer userToken={userToken} user={user}>
      <div className="ml-5">
        <h1 className="text-5xl tracking-wide my-4">
          {user.firstName ? `Welcome ${user.firstName}!` : "Welcome!"}
        </h1>
        <div>
          <h2 className="text-base font-bold my-4">Recent Logs:</h2>
          <div>
            {recentLogs.length === 0 ? (
              "No Entries"
            ) : (
              <ReactionEntryCardContainer>
                {recentLogs.map((log, i) => {
                  return (
                    <div key={log.id} className="w-1/4 min-w-min m-3">
                      <Link to={`/view-entry/${log.id}`}>
                        <ReactionEntryCard
                          index={i}
                          bookName={log.book}
                          rxnSketch={log.rxn_sketch}
                          quickInfo={log.quick_info}
                          lastUpdated={log.last_updated}
                          bookEntryNumber={log.book_entry_number}
                        />
                      </Link>
                    </div>
                  );
                })}
              </ReactionEntryCardContainer>
            )}
          </div>
        </div>
      </div>
    </LeftNavigationContainer>
  );
};
