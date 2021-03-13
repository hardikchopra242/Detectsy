import React from 'react';
import './Howto.css';

const Howto = ( ) => {
	return(
		<div className='container'>
			<div className = 'instructions'>
				<h3>Getting Started</h3> 
				<ol>
				<li>Copy the address of any image in which you want to detect a face.</li>
				<li>Put the address in the above field.</li>
				<li>Press Detect!</li>
				</ol>
			</div>
		</div>	

	);
}

export default Howto;