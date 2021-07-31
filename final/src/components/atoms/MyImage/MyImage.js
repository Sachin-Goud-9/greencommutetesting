import React from 'react'


const MyImage = ({src,height,width,styles,alt,...rest}) => {
    return (
        <img src={src} height={height} width={width} alt={alt} style={styles} {...rest} data-testid='image'/> 
    );
}

export default MyImage