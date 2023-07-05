import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({Component}) {
    const navigate = useNavigate()

    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('auth'))
        if(!auth){
            navigate('/auth')
        }
    } , [])
    return (
        <div> 
            <Component />
        </div>
    );
}

export default ProtectedRoute;