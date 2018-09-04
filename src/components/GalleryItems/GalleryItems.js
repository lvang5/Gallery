import React, { Component } from 'react';



class GalleryList extends Component {
    constructor(props) {
        super(props)
        this.state = { clicked: true }
    }
    favoriteClick = (event) => {
        console.log('button was clicked');
        this.props.addLike(this.props.image.id);
        
    }
    handleImageClick = () => {
       this.setState({
        clicked: !this.state.clicked
       })

    }
    render() {
        const clicked = this.state.clicked;
        let swap;
        if (clicked) {
            swap = <img className="img" alt={this.props.image.id} src={this.props.image.path}/>
        } else {
           swap =  <div className="des">{this.props.image.description}</div>
        }
        
        return (
            <div className="column">
            <div onClick={this.handleImageClick} key={this.props.image.id}>
                {swap }
            </div>
            <br />
                <button className="favorite" onClick={this.favoriteClick}>Favorite</button>
                <p className="likes">Likes: {this.props.image.likes}</p>
            </div>
        );
    }
}

export default GalleryList;