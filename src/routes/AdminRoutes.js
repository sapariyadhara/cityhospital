import React from 'react';

// import Medicine from '../admin/containers/Medicine';
import { Route, Routes } from 'react-router-dom';
import Appointment from '../admin/containers/Appointment';
import Department from '../admin/containers/Department';
import Doctor from '../admin/containers/Doctor';
import Sidenavbar from '../admin/components/Sidenavbar';
import Medicine from '../admin/containers/medicines/Medicine';

function AdminRoutes(props) {
    return (
        <>

           <Sidenavbar>
                <Routes>
                    <Route path='/Medicine' element={ <Medicine />} />
                    {/* <Route path='/Medicine' element={<Medicine />} /> */}
                    <Route path='/Appointment' element={<Appointment />}/>
                    <Route path='/Department' element={<Department />} />
                    <Route path='/Doctor' element={<Doctor />} />
                </Routes>
           </Sidenavbar>
        </>
    );
}

export default AdminRoutes;