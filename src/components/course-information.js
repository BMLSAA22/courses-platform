import React from 'react';
import Review from './review';



function CourseInformation (props) {
    
       return (
        <div className="">
             <div className="text" Style={"position:relative;margin:2% 7%"}>
                    <p Style={"font-family: 'Poppins';font-style: normal;font-weight: 400;color: #102844;"}> {props.description}</p>
                </div>
                <div className="reviews" Style={"display:flex;flex-direction:column;justify-content:start ;margin-left:5%;align-items:start;"}>
                    <h2 Style={"position:relative;margin:2% 5%;font-style: normal;font-weight: 500;font-size: 18px;line-height: 22px;color: #102844;"}>Reviews</h2>
                    <Review />
                    <Review />

                </div>
               
                <div className="comment" Style={"display:flex;flex-direction:column;justify-content:start ;align-items:start;"}>
                <h2 Style={"font-family: 'Poppins';font-style: normal;position:relative;margin:2% 5%;font-style: normal;font-weight: 500;font-size: 1.2rem;line-height: 1.5rem;color: #102844;"}>Leave a comment</h2>
                <input Style={"width:90%;height:100px;border-radius:20px; margin-left:5%;background: #F8F8FB;mix-blend-mode: normal;"}></input>
                <button Style={"position:relative;width:20%;border:none;margin:5%;padding:2vh;background:#4C6FFF;color:white;border-radius:10px"}>Punlish review</button>

                </div>
                

        </div>


                   

        );
    
  }
export default CourseInformation;