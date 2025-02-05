import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const PrivetRouter = ({children}) => {
    const{user,loading}=useContext(AuthContext);

    if (loading) {
        return  <Loading></Loading>
    }

    if (user && user?.email) {
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivetRouter;