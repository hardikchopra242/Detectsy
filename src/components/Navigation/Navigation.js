import React from 'react';
import './Navigation.css';

const Navigation = ({ name, entries, onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav>
          <p className='f3 ttc'>Welcome, 
          <span className="name"> {name}</span> !</p>

          <div className='nav_end name'>
            <span className='pv2 ph3 f4 mh1 br2'>Current Count : {entries} </span>
            <p onClick={() => onRouteChange('signin')} className='nav_element f4 link dim black pv2 ph3 pointer mh1 br2'>Sign Out</p>
          </div>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='nav_element f4 link dim black pv2 ph3 pointer mh1 br2'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='nav_element f4 link dim black pv2 ph3 pointer mh1 br2'>Register</p>
        </nav>
      );
    }
}

export default Navigation;