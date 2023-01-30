import React from "react";
import { GoIssueOpened } from "react-icons/go";
const Issuecard = ({ data }) => {
  return (
    <div className="Card">
      <div className="card-text-data">
        <GoIssueOpened color="green"/><span>{data.title}</span>
      </div>
      <div>
        {data.labels.map((label) => (
          <span key={label.id}>{label.name}</span>
        ))}
      </div>
      <div className="card-date-data">
        <span>date = 21/04/2001 last open by dikshant solanki</span>
      </div>
    </div>
  );
};

export default Issuecard;
