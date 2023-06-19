
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './containers/About';
import Home from './containers/Home';
import Appoinment from './containers/Appoinment';
import Contect from './containers/Contect';
import Departments from './containers/Departments';
import Doctors from './containers/Doctors';




function App() {
  return (
  
     <Router>
      <Routes>   
        <Route path='/Home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Appoinment' element={<Appoinment />} />
        <Route path='/Contect' element={<Contect />} />
        <Route path='/Departments' element={<Departments />} />
        <Route path='/Doctors' element={<Doctors />} />
      </Routes>
     </Router>    
     
  );
}

export default App;
