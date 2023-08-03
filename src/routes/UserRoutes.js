import React, { useState } from 'react';
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
import Medicine1 from '../users/containers/medicene1/Medicine1';
import Cart1 from '../users/containers/CartAdd1/Cart1';
import MyFav from '../users/containers/MyFavorit/MyFav';
import Counter1 from '../users/containers/Counter/Counter1';
import { CounterContext } from '../users/containers/CounterContext/CounterContext';
import Dislpay from '../users/containers/CounterContext/Display';
import Buttons from '../users/containers/CounterContext/Buttons';




function UserRoutes(props) {
    const [cartCount, setCartCount] = useState(0)
    const [count, setCount] = useState(0);

    return (
        <>
            <Header count1={cartCount} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/Appoinment' element={<Appoinment />} />
                <Route path='/Contect1' element={<Contect1 />} />
                <Route path='/Counter' element={<Counter />} />
                <Route path='/Counter1' element={<Counter1 />} />
                <Route path='/Departments' element={<Departments />} />
                <Route element={<ProtectedRoute />}>
                    <Route path='/Medicine' element={<Medicines />} />
                </Route>
                <Route path='/Medicine1' element={<Medicine1 onCartCount={setCartCount} />} />
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
                <Route path='/Cart1' element={<Cart1 />} />
                <Route path='/MyFav' element={<MyFav />} />
               <Route>
               <CounterContext.Provider value={{count : count , setCount : setCount}}>
                    <Dislpay />
                    <Buttons />
                </CounterContext.Provider>
               </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;