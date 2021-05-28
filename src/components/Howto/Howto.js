import React from 'react';
import './Howto.css';
import Popup from 'reactjs-popup';

const content = () => {
	return (
		<div className = 'instructions'>
				<h3>GETTING STARTED</h3> 
				<ol>
				<li>Copy the address of any image in which you want to detect a face.</li>
				<li>Put the address in the above field.</li>
				<li>Press Detect!</li>				

				<li><del> Add a Clear button along with Detect</del></li> 
				<li> <del>Alignments!!!</del></li>
				<li> <del>Where to put the help section?</del></li>

				<li> Resolve the Back Button Issue -- styling + FirstBoot</li>
				<li> Dont increase the counter if the input is empty </li>
				<li> On screen small -- font change, alignments</li>
				<li> Styling Button ==> Icons Symbols in the buttons</li>
				<li> Code Linting</li>
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