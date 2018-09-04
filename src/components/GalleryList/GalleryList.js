import React, { Component } from 'react';
import GalleryItems from '../GalleryItems/GalleryItems.js';
import Description from '../Description/Description.js';


class Images extends Component {
    constructor() {
        super()
        this.state = { clicked: false }
    }

    handleImageClick = () => {
        console.log('image clicked');
        
        this.setState({ clicked: true });
    }

    handleDesClick = () => {
        console.log('image clicked');
        this.setState({ clicked: false })
    }

    render() {

        const clicked = this.state.clicked;
        let img;

        return (
            <div className="row">
                {this.props.galleryItems.map((images) => {
                     if (clicked) {
                         console.log(clicked);
                         img = <Description onClick={this.handleDesClick} clicked={clicked} key={images.id} image={images}/>
                        
                    } else {
                        console.log(clicked);
                        img = <GalleryItems onClick={this.handleImageClick} clicked={clicked} key={images.id} image={images}/>;
                        
                    }
                    return (
                        <div key={images.id}>
                            {img}
                        </div>

                    );

                })}

            </div>

        );
    }
}

export default Images;


