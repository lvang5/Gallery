import React, { Component } from 'react';
import GalleryItems from '../GalleryItems/GalleryItems.js';



class GalleryList extends Component {

    render() {
        return (
            <div className="row">
                {this.props.galleryItems.map((images) => {
                    return (
                        <GalleryItems key={images.id} image={images} addLike={this.props.addLike}/>
                        
                    );
                })}
                
            </div>

        );
    }

}

export default GalleryList;


