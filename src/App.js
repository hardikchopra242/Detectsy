import React from 'react'

import Navigation from './components/Navigation/Navigation.jsx'
import ImageSearchPage from './components/ImageSearchPage/ImageSearchPage.jsx'
import MainSection from './components/MainSection/MainSection.jsx'
import Footer from './components/Footer/Footer.jsx'

import globalStyle from './styles/global.style.js'
import {Layout} from './styles/theme.config.js'

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

class App extends React.Component {

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

  onButtonClear = () =>{
    this.setState({input : ''});
    this.setState({imageUrl : ''});
    let input = document.querySelector(`.input`);
    let bounding_box = document.querySelector(`.bounding_box`);
    input.value = ""
  }



  onRouteChange = (route) => {
    if (route === '') {
      this.setState(intialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});

  }

  render() {

    globalStyle();

    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <Layout>
        <Navigation
          name={this.state.user.name}
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        { route === 'home'
          ?
            <ImageSearchPage
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            onButtonClear = {this.onButtonClear}
            box={box}
            imageUrl={imageUrl}
            />
          :
          <MainSection
            route = {this.state.route}
            loadUser = {this.loadUser}
            onRouteChange = {this.onRouteChange}
          />
        }

        <Footer />
      </Layout>
    );
  }
}

export default App;
