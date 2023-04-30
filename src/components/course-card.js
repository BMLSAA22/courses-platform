import React from 'react';

class CourseCard extends React.Component {
    render() {
        return(<div className='CourseCard'>
            <img src="images/thumbnail.png" alt=''></img>
            <div className='course-categorie'>4d animation</div>
            <h1>Learning Maxon 4D Training Course</h1>
            <p>15 Lessons(10 h) <span>$140</span></p>
        </div>);
    }
  }
export default CourseCard;