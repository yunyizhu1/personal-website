import React from 'react';

const Award = ({award}) => (
  <div className="award-preview">
    <div className="title">
      {award.title}
    </div>
    <div className="descriptions">
      {award.description}
    </div>
  </div>
);


export default Award;