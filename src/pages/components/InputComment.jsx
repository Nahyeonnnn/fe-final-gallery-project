import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const InputComment = (props) => {

    // console.log(props.ImageId);
    // useEffect(()=>{

    //     axios
    //         .
    // },[]);

    const [newComment, setComment]=useState("");

    function insertComment(e){
        setComment(e.target.value);
        console.log(newComment);
    }

    function buttonClick(){
        axios
            .post(`https://gallery.jmoomin.com/${props.ImageId}/comments`,{
                commentBody : newComment
            })
            .then(()=>{
                console.log(newComment);
                console.log('전달 성공');
            })
            .catch((e)=>{
                console.log(e);
            });
    }

    return (
        <div>
            <input placeholder="댓글 작성.." onChange={insertComment} value={newComment} ></input>
            <button onClick={buttonClick}>게시</button>
        </div>
    );
};

export default InputComment;