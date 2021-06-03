import React from 'react';
import './Howto.css';
import Popup from 'reactjs-popup';

const content = () => {
	return (
		<div className = 'instructions'>
				<h2>Getting Started</h2> 
				<ol>
				<li>Search any image and copy the image address.</li>
				<li>Paste that address in the search field.</li>
				<li>Press Detect!</li>				
			</ol>
			</div>
		)
}

const Howto = ( ) => {
	
	return(
	
		<div className='container'>
			<Popup trigger={<p className='nav_element f4 link dim black pv2 ph3 pointer mh1 br2'> Help </p>} position="bottom center">
    			{content()}
  			</Popup>
		</div>	

	);
}

export default Howto;