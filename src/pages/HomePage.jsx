import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import HomeHeader from './components/HomeHeader';
import HomeCards from './components/HomeCards';
import axios from "axios";

const HomePage = () => {

    const [imageSize, setImageSize]=useState();
    const [imageAll, setImageAll]=useState([]);

    useEffect(()=>{
        axios
            .get(`https://gallery.jmoomin.com/imageAll`)
            .then((res)=>{
                console.log(res);
                setImageAll(res.data);
                console.log(imageAll);
            })
            .catch((e)=>{
                console.log(e);
                alert(e);
            })
    },[])

    useEffect(()=>{
        axios
        .get(`https://gallery.jmoomin.com/imageSize`)
        .then((res)=>{
            setImageSize(res.data);
        })
        .catch((e)=>{
            alert(e);
            console.log(e);
        })
    },[])

    return (
        <>
            <HomeHeader ImageSize={imageSize}></HomeHeader>
            <HomeCards Images={imageAll}></HomeCards>
        </>
    );
};

export default HomePage;