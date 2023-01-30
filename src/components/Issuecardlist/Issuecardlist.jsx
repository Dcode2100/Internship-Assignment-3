import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Issuecard from "../Issuecard/Issuecard";
import "./Issuecardlist.scss";

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

  return (
    <div className="issuecardlist">
      <div className="issuecardlist-header">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>

      <div className="issuecard-data-container">
        <InfiniteScroll
          pageStart={1}
          loadMore={loadIssues}
          hasMore={hasMore}
          loader={<div className="loader">Loading ...</div>}
        >
          {issues.map((issue,index) => (
            <Issuecard key={index} data={issue} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Issuecardlist;
