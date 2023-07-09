import React from 'react';
import { styled } from 'styled-components';


const TotalProfil = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px;
`;

const ProfilPhoto = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin: 0px;
`;

const ProfilText = styled.div`
    display: flex;
    flex-direction: column;
`;

const HomeHeader = (props) => {
    return (
        <TotalProfil>
            <ProfilPhoto></ProfilPhoto>
            <ProfilText>
                <h2>likelion_11th_frontend</h2>
                <p>멋쟁이사자처럼 11기 여러분의 소중한 추억들을 보관합니다.😎</p>
                <br/>
                <p>게시물 {props.ImageSize}개</p>
            </ProfilText>
        </TotalProfil>
    );
};

export default HomeHeader;