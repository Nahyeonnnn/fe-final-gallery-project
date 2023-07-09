import React from 'react';
import { styled } from 'styled-components';

const GalleryImage = styled.img`
    width: 100px;
    height: 100px;
`;

const GalleryTitle = styled.h2`

`;

const GalleryText = styled.p`

`;

const GalleryName = (props) => {
    const image = props.ImageData[0];
    console.log(image);
    return (
        // undefined 예외처리...
        <div>
            <GalleryTitle>{image===undefined?'':image.imageName}</GalleryTitle>
            <GalleryText>{image===undefined?'':image.imageText}</GalleryText>
            <GalleryImage src={image===undefined?'':image.imageURL}></GalleryImage>
        </div>
    );
};

export default GalleryName;