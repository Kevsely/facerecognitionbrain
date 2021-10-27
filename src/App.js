import { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank.js'
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

//Clarifai init
const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "kevsely",
    "app_id": "f92ad747e4c44a248b810c187ba4164c"
  },
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
        }
      }
    }
  ]
});
const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key b2dfced0cc0a415d8c23457948834eb6'
  },
  body: raw
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  onInputChanges = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    fetch("https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs", requestOptions)
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      < div className="App" >
        <Particles className="particle" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChanges={this.onInputChanges}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*       
      <FaceRecognition /> */}
      </div >
    )
  }
}

export default App;
