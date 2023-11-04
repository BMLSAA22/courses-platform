import './App.css';
import React, { Component } from 'react';
import  Sidebar from './sidebar.js'
import  Navbar from './navbar.js'
import Content from './components/content';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import CourseDetails from './course-details';
import Quiz from './components/quiz';
import Login from './components/login';
class App extends Component {
render() {
   

  return (
    
    


      
        <div className="App">
          <Routes>
        
        <Route path="/details" element={< CourseDetails/>} />
        <Route path='/' element={<><Sidebar/><Navbar/><Content /></>}/>
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </div>

      
          
      
        
     
      
        
    
  ); 
}
}

export default App;
