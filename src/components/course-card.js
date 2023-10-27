import React from 'react';
import {
    useNavigate
  } from "react-router-dom";

const CourseCard = (props) => {
    let Navigate = useNavigate();
    const handleCardClick = () => {
        console.log('hello')
        Navigate('/details'); 
    };
    

    return (
        <div className='CourseCard' onClick={handleCardClick}>
            <img src={props.image} alt='' />
            <div className='course-categorie'>{props.categorie}</div>
            <h1>Learning Maxon 4D Training Course</h1>
            <p>15 Lessons(10 h) <span>$140</span></p>
        </div>
    );
};

export default CourseCard;
