import React from 'react';
import Review from './review';



class CourseInformation extends React.Component {
    render() {
       return (
        <div className="">
             <div className="text" Style={"position:relative;margin:2% 7%"}>
                    <p Style={"font-family: 'Poppins';font-style: normal;font-weight: 400;color: #102844;"}> IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. 

                    Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit.

                    Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.</p>
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
  }
export default CourseInformation;