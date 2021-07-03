import './Home.css';
import home_image from './../../images/search.svg';
import * as S from './Home.style.js'

const Home = () => {
	return (
			<S.Container>
				<S.Content>
					<S.Heading className = 'heading animate__animated animate__fadeInDownBig'>
					  Detectsy
					</S.Heading>
					<S.Main className = 'main_section'>
						<S.SVG>
							<img src = {home_image} className = 'home_image' alt = 'search'/>
						</S.SVG>
						<S.Para className = 'home_para'>
							<p className = 'home_text animate__animated animate__fadeInRight'>
								Welcome To Detectsy! <br />
								This is a full-stack webApp made using ReactJS & ExpressJS <br />
								This website can help you detect faces in images
								Welcome To Detectsy! <br />
								This is a full-stack webApp made using ReactJS & ExpressJS <br />
								This website can help you detect faces in images
								Welcome To Detectsy! <br />
								This is a full-stack webApp made using ReactJS & ExpressJS <br />
								This website can help you detect faces in images
							</p>
						</S.Para>
					</S.Main>
			  </S.Content>
		  </S.Container>
	);
}

export default Home;
