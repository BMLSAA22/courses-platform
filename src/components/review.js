import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'
class Review extends React.Component {
    render() {
        return(<div className='review' Style={"margin:2px;;position:relative;width:100%;display:flex;justify-content:start;border-radius:10px;border: 1px solid #F8F8FB;"}>
            <img src="images/img1.jpg" Style={"position:relative;margin:3%;width:5.5%;aspect-ratio:1;border-radius:50%;align-self: flex-start;"}></img>
            <div Style={" position:relative;margin:3%;display:flex;flex-direction:column;justify-content:start;align-items:start"}>
                <h3 Style={"color: #102844;font-weight: 500;font-size: 1.1rem;line-height: 1.2rem;"}>Arlene McCoy</h3>
                <h5 Style={"color: #767278;font-weight: 500;font-size: 0.7rem;line-height: 1rem;"}>about an hour ago</h5>
                <h4 Style={"color: #767278;font-weight: 500;font-size: 0.7rem;line-height: 1rem;"}>Access to IBM Cloud modelling what is I was looking for and Aaron got me the solution.</h4>
            </div>
        </div>);
    }
  }
export default Review;