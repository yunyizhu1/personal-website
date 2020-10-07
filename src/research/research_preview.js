import React from 'react';

const Research = ({research}) => (
    <div className="publication_preview">
      <div className="title">
        {research.title}
      </div>
      <div className="author">
        {research.authors}
      </div>
      <div className="conference">
        in <div>{research.conference}</div>
      </div>
    </div>
  );


export default Research;