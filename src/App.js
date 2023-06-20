
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './containers/About';
import Home from './containers/Home';
import Appoinment from './containers/Appoinment';
import Contect from './containers/Contect';
import Departments from './containers/Departments';
import Doctors from './containers/Doctors';
import Header from './components/Header'
import Footer from './components/Footer'
import Doctor from './containers/Doctor';




function App() {
  return (


    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Appoinment' element={<Appoinment />} />
        <Route path='/Contect' element={<Contect />} />
        <Route path='/Departments' element={<Departments />} />
        <Route path='/Doctors' element={<Doctors />} />
        <Route path='/Doctor/:id' element={<Doctor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
