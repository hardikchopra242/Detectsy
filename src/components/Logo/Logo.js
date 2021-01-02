import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import logo from './logo.svg';

const Logo = () => {
return(
    <div className="logo ma2">
        <Tilt className="Tilt br3 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
         <div className="Tilt-inner pa4 grow ">
             <img alt="logo" src={logo} />
         </div>
        </Tilt>
    </div>
);

}

export default Logo;
