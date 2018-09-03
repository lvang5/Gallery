import React, { Component } from 'react';

class GalleryList extends Component {
    render() {
        return (
            <div className="column" key={this.props.image.id}> 
            <img className="img" alt={this.props.image.id} src={this.props.image.path} />
            <br/>
            <button className="favorite" >Favorite</button>
            </div>
        );
    }
}

export default GalleryList;