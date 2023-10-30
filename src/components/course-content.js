import React from 'react';
import Review from './review';
import CoursePricing from './course-pricing';
import CourseInformation from './course-information';
import CourseTuto from './course-tuto';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import  { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

function CourseContent(props)  {
    const [data, setData] = useState(null);
    const location=useLocation()
    const id=location.state.id
    useEffect(() => {
        fetch("http://127.0.0.1:5000/course/"+id)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => { 
        setData(data);
        console.log(data[0].description)
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
        
      }, []);
    
        
        
        
    
    
    
        const style="position:absolute; left: 17.36%;top:9.77%;width:82.64%;height:170%;background:#F8F8FB;display:flex;align-items:start;padding:1%"
        const mainStyle="position:relative;width:60%;background:white;border-radius:20px;"
       return (
        <div className='course-content' Style={style}>  

            <div className="main-wrapper"Style={"position:relative;display:flex;flex-direction:column;justify-content:start;align-items:start"+mainStyle}>
            
            
            <div Style={"display:flex;flex-direction:column"}className='main'>
                <img src='images/thumbnail.png' alt="" Style={" margin-top:3%;left:5%;position:relative;aspect-ratio:16/9;width:90%;border-radius:20px"}></img>
                <h2 Style={"margin:1.5% 5%;align-self:start;font-family: 'Poppins';font-style: normal;font-weight: 600;font-size: 20px;line-height: 22px;color: #102844;"}>artificial intelligence and machine learning</h2>
                <p Style={"align-self:start;margin:0% 5%;color: #767278;font-weight: 400;line-height: 40px;"}>by <span Style={"color:#102844;font-weight:600"}>bourahla amayas</span> ilustrator and designer</p>
               <Tabs className="Tabs" Style={"border:none"}>
                <TabList Style={"display:flex;margin:5%;justify-content:space-between;border:none"}>
                    <Tab Style={"border:none"}><p Style={"background:#FF7800;color:white;border-radius:20px;padding:10px 15px;font-size:10px"}>information</p></Tab>
                    <Tab Style={"border:none"}><p Style={"color: #102844;;border-radius:20px;padding:10px 15px;font-size:10px"} >content</p></Tab>
                    <Tab Style={"border:none"}><p Style={"color: #102844;;border-radius:20px;padding:10px 15px;font-size:10px"}>community</p></Tab>
                    <Tab Style={"border:none"}><p Style={"color: #102844;;border-radius:20px;padding:10px 15px;font-size:10px"}> Students</p></Tab>
                    </TabList>
                    <TabPanel>
                    {data ?<CourseInformation description={data[0].description} />:<p>There nothing to show</p>}
                </TabPanel>
                <TabPanel>
                {data ?<CourseTuto content={data[0].content} /> :<p Style={"padding:10px"}>There is nothing to show</p>}
                </TabPanel>
                </Tabs>

                

            </div>
            </div>
            <CoursePricing />
            
        </div> 
            
  

        );
    
  }
export default CourseContent