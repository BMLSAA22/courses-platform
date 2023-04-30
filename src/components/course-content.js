import React from 'react';
import Review from './review';
import CoursePricing from './course-pricing';
class CourseContent extends React.Component {
    render() {
        const style="position:absolute; left: 17.36%;top:9.77%;width:82.64%;height:100%;background:#F8F8FB;display:flex;align-items:start"
        const mainStyle="position:relative;height:100%;width:60%;background:white;border-radius:5%;margin:2%"
       return (
        <div className='course-content' Style={style}>  

            <div Style={"display:flex;flex-direction:column;justify-content:start;align-items:start"+mainStyle}>
            
            
            <div className='main'>
                <img src='images/thumbnail.png' alt="" Style={" margin-top:3%;position:relative;width:90%;border-radius:20px"}></img>
                <h2>artificial intelligence and machine learning</h2>
                <h3>by <span>bourahla amayas</span> ilustrator and designer</h3>
                <div className='' Style={"display:flex;justify-content:space-around"}>
                    <p>information</p>
                    <p>content</p>
                </div>
                <div className="text" Style={"position:relative;margin:5%"}>
                    <p Style={"font-family: 'Poppins';font-style: normal;font-weight: 400;color: #102844;"}> IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. 

                    Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit.

                    Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.</p>
                </div>
                <div className="reviews" Style={"display:flex;flex-direction:column;justify-content:start ;align-items:start;"}>
                    <h2 Style={"position:relative;margin:2%;font-style: normal;font-weight: 500;font-size: 18px;line-height: 22px;color: #102844;"}>Reviews</h2>
                    <Review />
                    <Review />

                </div>
               
                <div className="comment" Style={"display:flex;flex-direction:column;justify-content:start ;align-items:start;"}>
                <h2 Style={"position:relative;margin:2%;font-style: normal;font-weight: 500;font-size: 18px;line-height: 22px;color: #102844;"}>Leave a comment</h2>
                <input></input>

                </div>
                

            </div>
            </div>
            <CoursePricing />
            
        </div> 
            
  

        );
    }
  }
export default CourseContent