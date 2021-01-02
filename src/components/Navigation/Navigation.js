import React from 'react';
import Logo from '.././Logo/Logo';
import './Nav.css';

const Navigation = ( {onRouteChange , isSigned} ) => {
 
 if(isSigned){ 
    return(
     <nav>
        <Logo />
        <p onClick={() => onRouteChange('signout')} className="f3 link black underline pa3 dim pointer">Sign out</p>
     </nav>
 );}

 else{
    return(
    <nav>
        <Logo />
        <div className="flex">
            <p onClick={() => onRouteChange('signin')} className="f3 link black underline pa3 dim pointer">Sign In</p>
            <p onClick={() => onRouteChange('register')} className="f3 link black underline pa3 dim pointer">Register</p>
        </div>
    </nav>
    );
 }

}

export default Navigation;