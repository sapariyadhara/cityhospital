import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../users/containers/About';
import Home from '../users/containers/Home';
import Appoinment from '../users/containers/Appoinment';
import Departments from '../users/containers/Departments';
import Doctors from '../users/containers/Doctors';
import Header from '../users/components/Header'
import Footer from '../users/components/Footer'
import Doctor from '../users/containers/Doctor';
import NotFound from '../users/containers/NotFound';
import Auth from '../users/containers/Auth';
import Contect1 from '../users/containers/Contect1';
import Medicines from '../users/medicines/Medicines';
import ProtectedRoute from './ProtectedRoute';
import Cart from '../users/containers/Cart/Cart';
import MyFav from '../users/containers/MyFavorit/MyFav';
import MedicinesDetails from '../users/medicines/MedicinesDetails';
import CallbackFun from '../users/containers/Example/CallbackFun';

function UserRoutes(props) {
 
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/Appoinment' element={<Appoinment />} />
                <Route path='/Contect1' element={<Contect1 />} />
                <Route path='/Departments' element={<Departments />} />
                <Route element={<ProtectedRoute />}>
                    <Route path='/Medicine' element={<Medicines />} />
                    <Route path='/Medicine/:id' element={<MedicinesDetails />} />
                </Route>
                <Route path='/Doctors' element={<Doctors />} />
                <Route path='/Doctor/:id' element={<Doctor />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/Auth' element={<Auth />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/MyFav' element={<MyFav />} />
                <Route path='/CallbackFun' element={<CallbackFun />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;