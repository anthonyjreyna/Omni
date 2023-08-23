import React from 'react';

const HeroImage = ( {image,imageStyle,alt}) => {
    console.log("image",image)
    return (
        <>
            <div className={`img-container ${imageStyle}`}>
                <img src={image} alt={alt}/>
            </div>
        </>
    );
};

export default HeroImage;
