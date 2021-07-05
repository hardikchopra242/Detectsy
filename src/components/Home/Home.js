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
						<S.Para className = 'home_text animate__animated animate__fadeInRight'>
								Welcome To Detectsy! <br />
								This is a full-stack webApp made using ReactJS & ExpressJS <br /><br />
								This website can help you detect faces in images
								Welcome To Detectsy! <br />
								This is a full-stack webApp made using ReactJS & ExpressJS <br /><br />
								This website can help you detect faces in images
								Welcome To Detectsy! <br />
								This is a full-stack webApp made using ReactJS & ExpressJS <br />
								This website can help you detect faces in images
						</S.Para>
					</S.Main>
			  </S.Content>
		  </S.Container>
	);
}

export default Home;
