
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
import VisitingDoctor from './containers/VisitingDoctor';
import NotFound from './containers/NotFound';
import Auth from './containers/Auth';




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
        {/* <Route path='/Doctor/:id' element={<Doctor />} />
        <Route path='/Doctor/visiting_doctor' element={<VisitingDoctor />} /> */}

        <Route path='/Doctor/' >
        <Route path=':id' element={<Doctor />} />
        <Route path='visiting_doctor' element={<VisitingDoctor />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/Auth' element={<Auth />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
