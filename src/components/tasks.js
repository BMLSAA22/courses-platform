import React from 'react';
import Task from './task';
import ProgressBar from 'react-bootstrap/ProgressBar';


class Tasks extends React.Component {
    render() {
       return (
        <div className='tasks'>
            <Task />
            <Task />
            <Task />
            <Task />

                   
        </div>);
    }
  }
export default Tasks;