import React from 'react';

const Rank = ({ entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`Your current entry count is...`}
        <span className='f2'>{entries}</span>
      </div>
    </div>
  );
}

export default Rank;