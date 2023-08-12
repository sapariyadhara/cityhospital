import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute(props) {
    const auth = useSelector(state => state.auth)
    console.log(auth);
    return (
       
        auth.user ?  <Outlet /> : <Navigate to={'/auth'} replace />
       
    );
}

export default ProtectedRoute;