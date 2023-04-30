import React from 'react';
import ContentCard from './content-card';
import CourseCard from './course-card';
import Tasks from './tasks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAdd} from '@fortawesome/free-solid-svg-icons'
class Content extends React.Component {
    render() {
        // const Count="1.2K"
        // const Type="Courses Completed"
       return (
        <div className='content'>
       <div className="content-cards">
       <ContentCard/>
       <ContentCard/>
       <ContentCard/>
       <ContentCard/>    
       </div>
       <h1 Style={"font-size:1.2rem; margin-top:2%; font-weight: 600;color: #102844;margin-left:4%"}>Most Popular</h1>
       <div className='courses'>
       <CourseCard />
       <CourseCard />
       <CourseCard />
       <Tasks />

       </div>
       
       </div>);
       
    }
  }
export default Content;