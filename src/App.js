import './App.css';
import React, { Component } from 'react';
import  Sidebar from './sidebar.js'
import  Navbar from './navbar.js'
import Content from './components/content';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import CourseDetails from './course-details';
class App extends Component {
render() {
   

  return (
    
    


      
        <div className="App">
          <Routes>
        
        <Route path="/details" element={< CourseDetails/>} />
        <Route path='/' element={<><Sidebar/>
      <Navbar/>
      <Content /></>}/>
      </Routes>
      </div>

      
          
      
        
     
      
        
    
  ); 
}
}

export default App;
