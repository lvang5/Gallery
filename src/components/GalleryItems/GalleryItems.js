import React, { Component } from 'react';


class GalleryList extends Component {
  
   
    favoriteClick = () => {
        console.log('button was clicked');
        
    }


    render() {
        
        return (
            <div className="column" onClick={this.handleImageClick} key={this.props.image.id}>
                <img onClick={this.props.onClick}className="img" alt={this.props.image.id} src={this.props.image.path}/>
                <br />
                <button className="favorite" onClick={this.favoriteClick}>Favorite</button>
            </div>
        );
    }
}

export default GalleryList;