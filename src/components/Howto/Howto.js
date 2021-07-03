import Popup from 'reactjs-popup';
import * as S from './HowTo.style.js'

const content = () => {
	return (
		<S.Container className = 'instructions'>
				<S.Header>Getting Started</S.Header>
				<S.ListContainer>
					<S.ListElement>Search any image and copy the image address.</S.ListElement>
					<S.ListElement>Paste that address in the search field.</S.ListElement>
					<S.ListElement>Press Detect !</S.ListElement>
	   		</S.ListContainer>
    </S.Container>
	)
}

const Howto = ( ) => {
	return(
			<Popup trigger = {
				<S.Button >
					HELP
				</S.Button>
			}position="bottom center">
      {content()}
  		</Popup>
	)
}

export default Howto;
