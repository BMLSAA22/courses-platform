import React from 'react';
import ContentCard from './content-card';
import CourseCard from './course-card';
import Tasks from './tasks';
import  { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'

function Content() {
  

  
    
      const [data, setData] = useState([]);
      
      useEffect(() => {
        fetch("http://127.0.0.1:5000/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        return response.json();
      })
      .then((data) => {
        let tmp=[]
        for (let item of data) {
          tmp.push(item)
        }
        
        setData(tmp);
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        
      });
        
      }, []);
      

        // const Count="1.2K"
        // const Type="Courses Completed"
        // console.log(fetchData())
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
        
       {
        (Array.isArray(data))? 
       
       data.map((item, index) => (
        <CourseCard image={"images/image.png"} categorie={item.category} id={"653974762d29cfd3dd007791"}/>
       )): null}
       <CourseCard image={"images/image.png"} categorie={"Psychology"} id={"653974762d29cfd3dd007791"}/>
       <CourseCard image={"images/image (1).png"} categorie={"Developement"} id={"653974762d29cfd3dd007791"}/>
       <CourseCard image={"images/image (2).png"} categorie={"Scratch"} id={"123"}/>
       <CourseCard image={"images/image.png"} categorie={"Psychology"} id={"123"}/>
       <CourseCard image={"images/image (1).png"} categorie={"Developement"} id={"123"}/>
       <CourseCard image={"images/image (2).png"} categorie={"Scratch"} id={"123"}/>
       <CourseCard image={"images/image.png"} categorie={"Psychology"}/>
       <CourseCard image={"images/image (1).png"} categorie={"Developement"}/>
       <CourseCard image={"images/image (2).png"} categorie={"Scratch"}/>
       </div>
       <Tasks />

       </div>
       
       </div>
       
       
       );
       
    
  };
export default Content;