import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
    let localData = localStorage.getItem("status")
    console.log(localData);
    const navigate = useNavigate()

    // useEffect(() => {
    //     let auth = JSON.parse(localStorage.getItem('auth'))
    //     if(!auth){
    //         navigate('/auth')
    //     }
    // } , [])
    return (
       
        localData ?  <Outlet /> : <Navigate to={'/auth'} replace />
       
    );
}

export default ProtectedRoute;