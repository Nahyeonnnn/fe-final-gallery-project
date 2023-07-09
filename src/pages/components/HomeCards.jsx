import React from 'react';
import { styled } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const CardImage = styled.img`
    width: 200px;
    height: 200px;
    /* background-color: black; */
`;

const CardTitle = styled.p`

`;

const CardData = styled.p`

`;

const HomeCards = (props) => {

    const navigate = useNavigate();
    return (
        <>
            {props.Images.map((eachImage)=>(
                <div onClick={()=>navigate(`/article/${eachImage.id.charAt(eachImage.id.length-1)}`)}>
                    <CardImage src={eachImage.imageURL} alt={eachImage.id}></CardImage>
                    <CardTitle>{eachImage.imageName}</CardTitle>
                    <CardData>{eachImage.imageText}</CardData>
                </div>
            ))}
        </>
    );
};

export default HomeCards;