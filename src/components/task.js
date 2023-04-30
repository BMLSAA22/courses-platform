import React from 'react';
class Task extends React.Component {
    render() {
       return (
        <div className='task'>           
           <div className='left'>
            <img src='images/quiz.png'></img>
           </div>
           <div className='right'><h1>Machine Learning</h1><p>7am - 9am</p></div>       
        </div>
        );
    }
  }
export default Task;