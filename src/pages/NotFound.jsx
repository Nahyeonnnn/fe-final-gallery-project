import React from 'react';
import { useNavigate } from 'react-router-dom';



const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <p>이상한 곳으로 와버린 그대... 왔던 곳으로 다시 돌아가십숑</p>
            <br/>
            <img></img>
            <button onClick={()=>navigate(-1)}>왔던 곳으로 다시 돌아가기</button>
        </div>
    );
};

export default NotFound;