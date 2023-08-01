import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Appointment from '../admin/containers/Appointment';
import Sidenavbar from '../admin/components/Sidenavbar';
import Medicine from '../admin/containers/medicines/Medicine';
import DashBorad from '../admin/containers/dashborad/DashBorad';
import Doctor from '../admin/containers/Doctors/Doctor';
import Department from '../admin/containers/Department/Department';


function AdminRoutes(props) {
    return (
        <>

           <Sidenavbar>
                <Routes>
                <Route path='/' element={ <DashBorad />} />
                    <Route path='/Medicine' element={ <Medicine />} />
                    <Route path='/Appointment' element={<Appointment />}/>
                    <Route path='/Department' element={<Department />} />
                    <Route path='/Doctor' element={<Doctor />} />
                </Routes>
           </Sidenavbar>
        </>
    );
}

export default AdminRoutes;