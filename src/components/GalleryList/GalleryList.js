import React, { Component } from 'react';
import GalleryItems from '../GalleryItems/GalleryItems.js'


class Images extends Component {


    render() {
        return (
            <div>
                {this.props.galleryItems.map((image) => {
                    return (
                            <GalleryItems key={image.id} image={image} />
                    )
                })}
            </div>

        );
    }
}

export default Images;