
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './users/containers/About';
import Home from './users/containers/Home';
import Appoinment from './users/containers/Appoinment';
// import Contect from './users/containers/Contect';
import Departments from './users/containers/Departments';
import Doctors from './users/containers/Doctors';
import Header from './users/components/Header'
import Footer from './users/components/Footer'
import Doctor from './users/containers/Doctor';
import VisitingDoctor from './users/containers/VisitingDoctor';
import NotFound from './users/containers/NotFound';
import Auth from './users/containers/Auth';
import Contect1 from './users/containers/Contect1';
import Test2 from './users/containers/Test2';
import SideDrawermui from './users/containers/SideDrawermui';
import Sidenavbar from './admin/components/Sidenavbar';





function App() {
  return (


    <>
    <Sidenavbar />
    {/* <SideDrawermui /> */}
    {/* <Test2 /> */}
       {/* <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Appoinment' element={<Appoinment />} />
        <Route path='/Contect1' element={<Contect1 />} />
        <Route path='/Departments' element={<Departments />} />
        <Route path='/Doctors' element={<Doctors />} />
         <Route path='/Doctor/:id' element={<Doctor />} />
        <Route path='/Doctor/visiting_doctor' element={<VisitingDoctor />} /> 

         <Route path='/Doctor/' >
        <Route path=':id' element={<Doctor />} />
        <Route path='visiting_doctor' element={<VisitingDoctor />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/Auth' element={<Auth />}/> 
       </Routes> 
       <Footer />  */}
    </>
  );
}

export default App;
