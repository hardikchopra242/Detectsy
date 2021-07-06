import * as S from './Home.style.js'
import home_image from './../../images/search.svg';

const Home = () => {
	return (
			<S.Container>
				<S.Content>
					<S.Heading className = 'head animate__animated animate__fadeInDownBig'>
					  DETECTSY
					</S.Heading>
					<S.Main>
						<S.SVG className = 'hideSmall'>
							<img src = {home_image} height={200}  className = 'hideSmall' alt = 'search'/>
						</S.SVG>
						<S.Para className = 'animate__animated animate__fadeInRight'>
								Welcome To Detectsy! <br />
								Detectsy is a web-app that helps you detect faces in images.<br /><br />
								This is a full stack website made using ReactJS and ExpressJS.	 <br/ >
								It uses Clarifai API under the hood.<br/ >
								SignIn or Register to start using the App. <br /><br />
								To report a bug or suggest a new feature, visit the github repo‎&nbsp;
								<S.Link href="https://github.com/hardikchopra242/Detectsy" target="_blank">‎here
								</S.Link>.


						</S.Para>
					</S.Main>
			  </S.Content>
		  </S.Container>
	);
}

export default Home;
