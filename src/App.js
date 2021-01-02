import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '6d0a133a98e747279fd3652f1c5e702a'
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {

  constructor(){
    super();
    this.state = {
    input:"", 
    imageUrl:"", 
    box:{},
    route: 'SignIn' ,
    isSigned: false
  }
}

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.querySelector('#inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - ( clarifaiFace.right_col * width ),
      bottomRow: height - ( clarifaiFace.bottom_row * height )
    }
  }
  
  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
     Clarifai.FACE_DETECT_MODEL,
     this.state.input).then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
}

onRouteChange = (route) =>{

  if(route === 'signout'){
    this.setState({isSigned: false})
  }else if(route === 'home'){
    this.setState({isSigned: true})
  }

  this.setState({route: route});
}

  render() {
  
    return(
      <div className="">
        <Particles className="particles" params = {particlesOptions} />
        <Navigation onRouteChange = {this.onRouteChange} isSigned={this.state.isSigned} />
        { this.state.route === 'home' 
        ? <div>
        {/* <Rank /> */}
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} box={ this.state.box } />
        </div>
        : (
          this.state.route === 'register'
          ? <Register onRouteChange = {this.onRouteChange} /> 
          : <SignIn onRouteChange = {this.onRouteChange} />
        )
        }
        
      </div>
    );
  }
}

export default App;
