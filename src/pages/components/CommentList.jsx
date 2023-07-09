import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Anonymous = styled.p`

`;

const CommentText = styled.p`
    position: absolute;
    top: 0px;
    left: 30%;
`;

const CommentDelete = styled.button`
    border: none;
    background-color: white;  
`;

const CommentBigDiv = styled.div`
    position: relative;
`;

const CommentSmallDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const CommentList = (props) => {

    const [allComments, setComments]=useState([]);

    console.log(props);
    useEffect(()=>{
        axios
            .get(`https://gallery.jmoomin.com/${props.ImageId}/comments`)
            .then((res)=>{
                setComments(res.data);
            })
            .catch((e)=>{
                console.log(e);
            })
    },[allComments.length]);

    return (
        <CommentContainer>
            {
                allComments.map((eachComment)=>(
                    <CommentBigDiv>
                        <CommentSmallDiv>
                            <Anonymous>익명</Anonymous>
                            <CommentDelete>삭제</CommentDelete>
                        </CommentSmallDiv>
                        <CommentText>{eachComment.commentBody}</CommentText>
                    </CommentBigDiv>
                    
                ))
            }
            
        </CommentContainer>
    );
};

export default CommentList;