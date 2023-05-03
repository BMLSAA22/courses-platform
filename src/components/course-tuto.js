import React from 'react';
import TutoSection from './tuto-section';
class CourseTuto extends React.Component {

    render() {
        return(

            <div>
            <div Style={"width:90%; display:flex;justify-content:space-between;background:#F8F8FB;margin:2%;border-radius:20px;position:relative;padding:3% 3%"}>
                <div Style={"display:flex;flex-direction:column;align-items:start"} >
                    <h2 Style={"color: #767278;opacity: 0.9;font-weight:500;font-size:1.3rem; "}>course 1 of  6</h2>
                    <h2>Course1-introduction</h2>
                    <p>2 completed units of 11 available</p>
                </div>
                <button Style={"border:none;background: #4C6FFF;;width:15%;border-radius:20px;  flex-shrink: 0;flex-grow: 0;"}>Go to unit 3</button>

            </div>
            
            <TutoSection />
            <TutoSection />
            </div>

        );
    }
  }
export default CourseTuto ;