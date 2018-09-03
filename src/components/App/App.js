import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList.js';
import Header from '../Header/Header.js';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        galleryItems: []
    }
}

componentDidMount() {
    this.getImages();
}
getImages() {
    axios({
        method: 'GET',
        url:'/gallery'
    }).then((response) => {
      console.log(response.data);
      
        this.setState({
            galleryItems: response.data,
        });
    }).catch((error) => {
        console.log(error);
        alert('Unable to GET Images')
    });
}

  render() {
    return (
      <div className="App">
       <Header/>
        <br/>
        <h1 className="gallery">My Gallery</h1>
        <GalleryList />
        {/* {this.state.galleryItems.map((image, i) => {
          return (
            <div  key={i}> 
              <img className="img" alt={i} src={image.path} />
              </div>
          )
        })} */}
        
      </div>
    );
  }
}

export default App;
