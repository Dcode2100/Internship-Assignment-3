import React from 'react'
import Header from '../../components/Header/Header'
import './Issues.scss';
import Issuecardlist from '../../components/Issuecardlist/Issuecardlist';

const Issues = () => {
  return (
    <div className='issue-page'>
      <Header />
      <div className="issue"><Issuecardlist /></div>
      </div>
  );
}

export default Issues;