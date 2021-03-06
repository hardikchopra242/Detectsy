import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='nav_element f4 link dim black pv2 ph3 pointer mh1 br2'>Sign Out</p>
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