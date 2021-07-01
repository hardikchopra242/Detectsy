import React, { Component } from 'react';

import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Howto from './components/Howto/Howto';
import Home from './components/Home/Home';

import './App.css';
import signin_image from './signin.svg';

//Intial State Constant
const intialState = {
      input: '',
      imageUrl: '',
      box: {},

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
        console.log(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onButtonClear = () =>{

    //remove data from the input
    this.setState({input : ''});
    this.setState({imageUrl : ''});

    //remove the data from the state
    let input = document.querySelector(`.input`);
    let bounding_box = document.querySelector(`.bounding_box`);
    input.value = ""
    // bounding_box.style.display = "none";
    //remove the picture also
    //--> this is already been done automatically
  }

  manage_back_button = (isSignedIn,route) => {

    if(!isSignedIn){
      let back = document.querySelector('.back_button');
      let nav = document.querySelector('nav');

      if(back == null) return;
      if(route === ''){
        back.style.display = "none";
        nav.style.justifyContent = "flex-end";
        console.log(nav);
      }else{
        back.style.display = "block";
        nav.style.justifyContent = "space-between";
      }
    }
  }

  onRouteChange = (route) => {



    if (route === '') {
      this.setState(intialState);

    } else if (route === 'home') {
      this.setState({isSignedIn: true});

    }
    this.setState({route: route});

    this.manage_back_button(this.isSignedIn,route);
    console.log("state is ");
    console.log(this.state.route);

  }

   manageHomePage(){
    let route = this.state.route;

    if(route === 'signin'){
      return (
        <div className = 'login'>
              <div className='signin_image'>
                    <img src = {signin_image} alt = 'signin' />
              </div>
              <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div>
        )
    }
    else if(route === 'register'){
      return (
        <div className = 'login'>
              <div className = 'signin_image'>
                    <img src = {signin_image} alt = 'signin' />
              </div>
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div>
      )
    }
    else{
      //Sign Out Home
      return (<Home />)
    }
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (

        <div className="App">

        <Navigation
        name={this.state.user.name}
        entries = {this.state.user.entries}
        isSignedIn={isSignedIn}
        onRouteChange={this.onRouteChange}
        route = {route}
        />

        { route === 'home'
          ?
          <div className='sect'>
              <div className='image_wrapper center'>
                  <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                    onButtonClear = {this.onButtonClear}
                  />
                  <FaceRecognition box={box} imageUrl={imageUrl} />
              </div>
            </div>
          :
          this.manageHomePage()
        }
      </div>
    );
  }
}

export default App;
