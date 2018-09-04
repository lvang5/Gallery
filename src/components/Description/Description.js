import React, {Component} from 'react';

class Description extends Component {
    handleDesClick = () => {
        this.setState({ clicked: false })
    }
    render() {
        return(
            <div onClick={this.props.onClick} className="column" key={this.props.image.id}>
            <p>{this.props.image.description}</p>
            <button className="favorite" onClick={this.favoriteClick}>Favorite</button>
            </div>
        );
    }
}

export default Description;