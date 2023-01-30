import React from "react";
import { GoIssueOpened } from "react-icons/go";
import "./Issuecard.scss";

const Issuecard = ({ data }) => {
  return (
    <div className="card">
      <div className=" issueopen">
        <GoIssueOpened color="green" />
      </div>
      <div className="card-container-left">
        <div className="card-text-data">
          <span>{data.title}</span>
        </div>
        <div className="card-label-data">
          {data.labels.map((label) => (
            <span key={label.id} style={{backgroundColor: `#${label.color}`, borderRadius:"1rem", padding:"0.1rem", fontSize:"0.8rem", 
            fontWeight:"700"
            }}>
              {label.name}
            </span>
          ))}
        </div>
        <div className="card-date-data">
          <span>#22339 opened 15 hours ago by dikshant</span>
        </div>
        
      </div>
    </div>
    
  );
};

export default Issuecard;
