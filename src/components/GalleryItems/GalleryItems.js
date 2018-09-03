import React, { Component } from 'react';

class GalleryList extends Component {
    render() {
        return (
            <div  key={this.props.image.id}> 
            <img className="img" alt={this.props.image.id} src={this.props.image.path} />
            </div>
        );
    }
}

export default GalleryList;