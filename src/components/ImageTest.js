import React from 'react';

class ImageTest extends React.Component{

    render() {
        const style = {
            height: '200',
      
        }
        return (
        <div style={style}>
            <img height={style.height}  src={this.props.src}></img>
        </div>
    )}
}
ImageTest.defaultProps = {
    src: ''
}

export default ImageTest;