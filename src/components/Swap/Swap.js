// import React, { Component } from 'react';
// import GalleryItems from '../GalleryItems/GalleryItems.js';
// import Description from '../Description/Description.js'


// class Swap extends Component {


//     constructor(props) {
//         super(props)
//         this.state = { clicked: false }
//     }


//     handleImageClick = () => {
//         console.log('image clicked');

//         this.setState({ clicked: true });
//     }

//     handleDesClick = () => {
//         console.log('image clicked');
//         this.setState({ clicked: false })
//     }
//     render() {


//         const clicked = this.state.clicked;
//         let img;
if (clicked) {
    console.log(images.id);
    this.state.clicked && <Description onClick={this.handleDesClick} key={images.id} image={images}/>
    
   
} else {
   console.log(clicked);
   this.state.clicked && <GalleryItems onClick={this.handleImageClick} key={images.id} image={images}/>
   
   
}
//         return (
//             <div key={images.id}>
//                 {img}
//             </div>

//         );
//     }
// }

// export default Swap;