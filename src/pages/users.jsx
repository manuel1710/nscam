import React from "react";

import Carousel from 'react-bootstrap/Carousel';

const UsersPage=()=>{
    return (
        <div>
            <ul>
                {["Javian","Alex","Kemario","Javina","Zinga"].map((user, idx)=>{
                    return <li key={idx}>{user}</li>
                })}
            </ul>
        </div>
    );
};

export default UsersPage;