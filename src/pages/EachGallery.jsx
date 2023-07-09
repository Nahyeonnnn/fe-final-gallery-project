import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from "axios";
import GalleryName from "./components/GalleryName"
import InputComment from './components/InputComment';
import CommentList from './components/CommentList';

const EachGallery = () => {

    const {imageId} = useParams();
    const [eachImage, setImage]=useState([]);

    useEffect(()=>{
        axios
            .get(`https://gallery.jmoomin.com/imageAll`)
            .then((res)=>{
                setImage(res.data.filter(object => object.id === 'image' + imageId));
            })
            .catch((e)=>{
                console.log(e);
            });
    },[imageId]);
    console.log(eachImage);
    // useEffect(()=>{
    //     const filteredImages = eachImage.filter(object => object.id === 'image' + imageId);
    //     setImage(filteredImages);
    // },[imageId, eachImage])

    return (
        <div>
            <GalleryName ImageData={eachImage}></GalleryName>
            <p></p>
            <p></p>
            <br/>
            <InputComment ImageId={'image'+imageId}></InputComment>
            <CommentList ImageId={'image'+imageId}></CommentList>
        </div>
    );
};

export default EachGallery;