import React from 'react'
import { Navigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { logoutFUNC } from '../redux/reducers/authReducer';


 const Logout = () => {

    const dispatch=useDispatch();
    dispatch(logoutFUNC());

    return (<Navigate to="/login"/>);
}
export default Logout