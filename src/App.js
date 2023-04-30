import './App.css';
import React from 'react';
import  Sidebar from './sidebar.js'
import  Navbar from './navbar.js'
import Content from './components/content';
import CourseDetails from './course-details';
function App() {
  return (
    <div className="App">
      <CourseDetails />
      
      {/* <Sidebar/>
      <Navbar/>
     <Content /> */}
      
    </div>
  ); 
}

export default App;
