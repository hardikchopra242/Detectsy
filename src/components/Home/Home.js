import './Home.css';
import home_image from './../../images/search.svg';

const Home = () => {
	return (
		<div>
			<h1 className = 'heading animate__animated animate__fadeInDownBig'>Detectsy</h1>
			<div className = 'main_section'>
				<div>
					<img src = {home_image} className = 'home_image' alt = 'search'/>
				</div>
				<div className = 'home_para'>
					<p className = 'home_text animate__animated animate__fadeInRight'>
						Welcome To Detectsy! <br />
						This is a full-stack webApp made using ReactJS & ExpressJS <br />
						This website can help you detect faces in images
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
