import React, { Component } from 'react';


class GalleryList extends Component {
    constructor(props) {
        super(props)
        this.state = { clicked: true }
    }
    favoriteClick = () => {
        console.log('button was clicked');
        
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
            <div className="column" onClick={this.handleImageClick} key={this.props.image.id}>
                {swap}
                <br />
                <button className="favorite" onClick={this.favoriteClick}>Favorite</button>
            </div>
        );
    }
}

export default GalleryList;