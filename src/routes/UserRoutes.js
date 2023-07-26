import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../users/containers/About';
import Home from '../users/containers/Home';
import Appoinment from '../users/containers/Appoinment';
// import Contect from '../users/containers/Contect';
import Departments from '../users/containers/Departments';
import Doctors from '../users/containers/Doctors';
import Header from '../users/components/Header'
import Footer from '../users/components/Footer'
import Doctor from '../users/containers/Doctor';
import VisitingDoctor from '../users/containers/VisitingDoctor';
import NotFound from '../users/containers/NotFound';
import Auth from '../users/containers/Auth';
import Contect1 from '../users/containers/Contect1';
import MediicineU from '../users/containers/MediicineU';
import Medicines from '../users/medicines/Medicines';
import ProtectedRoute from './ProtectedRoute';
import Counter from '../users/containers/Counter/Counter';
import Cart from '../users/containers/Cart/Cart';



function UserRoutes(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/Appoinment' element={<Appoinment />} />
                <Route path='/Contect1' element={<Contect1 />} />
                <Route path='/Counter' element={<Counter />} />
                <Route path='/Departments' element={<Departments />} />
                <Route element={<ProtectedRoute />}>
                    <Route path='/Medicine' element={<Medicines />} />
                </Route>

                <Route path='/Doctors' element={<Doctors />} />
                <Route path='/Doctor/:id' element={<Doctor />} />
                <Route path='/Doctor/visiting_doctor' element={<VisitingDoctor />} />

                {/* <Route path='/Doctor/' >
                    <Route path=':id' element={<Doctor />} />
                    <Route path='visiting_doctor' element={<VisitingDoctor />} />
                </Route> */}
                <Route path='*' element={<NotFound />} />
                <Route path='/Auth' element={<Auth />} />
                <Route path='/Cart' element={<Cart />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;