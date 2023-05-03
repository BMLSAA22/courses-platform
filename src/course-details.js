import React from 'react';
import Sidebar from "./sidebar.js"
import Navbar from './navbar.js';
import CourseContent from './components/course-content.js';

class CourseDetails extends React.Component {
    render() {
        return(<div >
            <Sidebar></Sidebar>
            <Navbar />
            <CourseContent />
            

        </div>);
    }
  }
export default CourseDetails
