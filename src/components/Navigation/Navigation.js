import Howto from  '../Howto/Howto'

import './Navigation.css';
import '../Register/Register.css';

const Navigation = ({ name, entries, onRouteChange, isSignedIn, route}) => {
    if (isSignedIn) {
      return (
        <nav>
          <p className='f3 ttc'>Welcome,
          <span className="name head"> {name}</span> !</p>
          <div className='nav_end '>
            <Howto />
            <p onClick={() => onRouteChange('')} className='nav_element f4 link dim black pv2 ph3 pointer mh1 br2'>Sign Out</p>
          </div>
        </nav>
      );
    }
    else {
      return (
        <nav>
          <h1 onClick={() => onRouteChange('')} className='back_button f4 link dim black pv2 ph3 pointer mh1 br2'>HC</h1>
          <div className='flex'>
            <p onClick={() => onRouteChange('signin')} className='nav_element f4 link dim black pv2 ph3 pointer mh1 br2'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='nav_element f4 link dim black pv2 ph3 pointer mh1 br2'>Register</p>
          </div>
        </nav>
      );
    }
}

export default Navigation;
