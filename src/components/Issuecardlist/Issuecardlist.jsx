import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Issuecard from "../Issuecard/Issuecard";
import "./Issuecardlist.scss";
import { GoIssueOpened } from "react-icons/go";

const Issuecardlist = () => {
  const [issues, setIssues] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const loadIssues = async (page = 1) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/facebook/react/issues?page=${page}`
      );
      setIssues((prev) => [...prev, ...response.data]);
      if (response.data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="issuecardlist">
      <div className="issuecardlist-container">
        <div className="left-sm">
          <div className="open">
            <div>
              <GoIssueOpened />
            </div>
            <span>625 Open</span>
          </div>
          <div className="closed"> 10,104 Closed</div>
        </div>
        <div className="issuecardlist-header">
          <div className="left">
            <div className="open">
              <div>
                <GoIssueOpened />
              </div>
              <span>625 Open</span>
            </div>
            <div className="closed"> 10,104 Closed</div>
          </div>

          <div className="right">
            <span>Author</span>
            <span>Label</span>
            <span>Projects</span>
            <span>Sort</span>
          </div>
        </div>

        <div className="issuecard-data-container">
          <InfiniteScroll
            pageStart={1}
            loadMore={loadIssues}
            hasMore={hasMore}
            loader={<div className="loader">Loading ...</div>}
          >
            {issues.map((issue, index) => (
              <Issuecard key={index} data={issue} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Issuecardlist;
