import React, { Component } from 'react';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Howto from './components/Howto/Howto';
import vector from './searching.png';
import {background} from './backgrounds/background';
import Home from './components/Home/Home';

//Intial State Constant
const intialState = {
      input: '',
      imageUrl: '',
      box: {},
      background: background[0],
      route: '',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }


class App extends Component {
  constructor() {
    super();
    this.state = intialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
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
    fetch('https://cryptic-tor-38866.herokuapp.com/imageUrl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: this.state.input
            })
          })
          .then(res => res.json())
      .then(response => {
        if (response) {
          fetch('https://cryptic-tor-38866.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === '') {
      this.setState(intialState);
      this.setState({route: 'signin'});
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
      this.setState({background: background[1]});
    }
    this.setState({route: route});
  }

   manageHomePage(){
    let route = this.state.route;

    if(route === 'signin'){
      return (<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
    }
    else if(route === 'register'){
      return (<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
    }
    else{
      //Sign Out Home
      return (<Home />)
    }
  }

  render() {
    const { isSignedIn, imageUrl, route, box, background } = this.state;
    return (
        
        <div className="App">
         <Particles className='particles'
          params = {background}
        />

        <Navigation 
        name={this.state.user.name}
        entries = {this.state.user.entries}
        isSignedIn={isSignedIn} 
        onRouteChange={this.onRouteChange} 
        route = {route}
        />
        
        {/*<img src={vector} alt = "vector"  className="vector"></img>*/}

        { route === 'home'
          
          ? 
          
          <div className='sect'>
              {/* <Logo /> */}
              
              {/*<Rank
                entries={this.state.user.entries}
              />*/}
              
              <div className='center'>
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
              </div>
              
              <Howto />
            
            </div>
          
          : 
             this.manageHomePage()
        }

      </div>
    );
  }
}

export default App;
