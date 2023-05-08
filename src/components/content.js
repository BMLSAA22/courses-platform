import React from 'react';
import ContentCard from './content-card';
import CourseCard from './course-card';
import Tasks from './tasks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'
class Content extends React.Component {
    render() {
        // const Count="1.2K"
        // const Type="Courses Completed"
       return (
        <div className='content'>
       <div className="content-cards">
       <ContentCard color1={"#FFA674"} color2={"#FF3737"} stat={"1.2K"} title={"Course completed"} percentage={70}/>
       <ContentCard color1={"#BB65FF"} color2={"#4C6FFF"} stat={"470"} title={"Certificate earned"} percentage={20}/>
       <ContentCard color1={"#FF974D"} color2={"#FFE925"} stat={"342"} title={"Course in progress"} percentage={30}/>
       <ContentCard color1={"#20AF62"} color2={"#17E783"} stat={"20"} title={"Career Path"} percentage={45} />    
       </div>
       <h1 Style={"font-size:1.2rem; margin-top:2%; font-weight: 600;color: #102844;margin-left:4%"}>Most Popular</h1>
       <div Style={"display:flex"}>
       <div className='courses' Style={"  position: relative;display: flex; justify-content:space-between;width:70%;padding-top:5px;flex-wrap: wrap;margin:0 2%"}>
       <CourseCard image={"images/image.png"} categorie={"Psychology"}/>
       <CourseCard image={"images/image (1).png"} categorie={"Developement"}/>
       <CourseCard image={"images/image (2).png"} categorie={"Scratch"}/>
       <CourseCard image={"images/image.png"} categorie={"Psychology"}/>
       <CourseCard image={"images/image (1).png"} categorie={"Developement"}/>
       <CourseCard image={"images/image (2).png"} categorie={"Scratch"}/>
       <CourseCard image={"images/image.png"} categorie={"Psychology"}/>
       <CourseCard image={"images/image (1).png"} categorie={"Developement"}/>
       <CourseCard image={"images/image (2).png"} categorie={"Scratch"}/>
     
        
       </div>
       <Tasks />

       </div>
       
       </div>);
       
    }
  }
export default Content;