import React from 'react';

const Rank = ({ entries }) => {
  return (
    <div>
      <div className='white f4'>
        {`Current Count : `}
        <span className='f4 b'>{entries}</span>
      </div>
    </div>
  );
}

export default Rank;