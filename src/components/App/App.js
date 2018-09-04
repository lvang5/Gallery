import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList.js';
import axios from 'axios';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            galleryItems: []
        }
    }
    //life cycle method 

    componentDidMount() {
        this.getImages();
    }
    getImages() {
        axios({
            method: 'GET',
            url: '/gallery'
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


    //adds one like to a specific image
    addLike = (likedItem) => {
        console.log('received item', likedItem);
        axios({
            method: 'PUT',
            url: '/gallery/like/' + likedItem
        }).then((response) => {
            console.log('Success in PUT');
            this.getImages();
        }).catch((error) => {
            console.log(error);
            alert('Unable to Update likes')
        });
    }


    render() {
        return (
            <div className="App">
                <br />
                <h1 className="gallery">My Gallery</h1>
                <GalleryList galleryItems={this.state.galleryItems} addLike={this.addLike} />
            </div>
        );
    }
}

export default App;
