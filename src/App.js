import { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
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

function initRequestOptions(formUrl) {
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
            "url": formUrl
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

  return requestOptions;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      formUrl: "",
    }
  }

  onInputChanges = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ formUrl: this.state.input });

    fetch("https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs", initRequestOptions(this.state.input))
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data.regions[0].region_info.bounding_box))
      // .catch(error => console.log('error', error));
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
        <FaceRecognition imageUrl={this.state.formUrl} />
      </div >
    )
  }
}

export default App;
