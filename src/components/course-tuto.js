import React from 'react';
import TutoSection from './tuto-section';
import  { useState, useEffect } from 'react';
function CourseTuto(props) {
    useEffect(() => {
        props.content.forEach(element => {
            console.log(element.type)
            
        });
    
    
    },[])


   
        return(

            <div>
            <div Style={"width:90%; display:flex;justify-content:space-between;background:#F8F8FB;margin:2%;border-radius:20px;position:relative;padding:3% 3%"}>
                <div Style={"display:flex;flex-direction:column;align-items:start"} >
                    <h2 Style={"color: #767278;opacity: 0.9;font-weight:500;font-size:0.8rem; "}>course 1 of  6</h2>
                    <h3>Course1-introduction</h3>
                    <p>2 completed units of 11 available</p>
                </div>
                <button Style={"border:none;background: #4C6FFF;;width:15%;height:20%;border-radius:20px;  flex-shrink: 0;flex-grow: 0;"}>Go to unit 3</button>

            </div>
            
            <TutoSection />
            <TutoSection />
            </div>

        );
    
  }
export default CourseTuto ;