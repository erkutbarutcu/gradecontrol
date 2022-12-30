import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Log(){
    const isauth=useSelector(state=>state.authState.isAuth);
    if (isauth) {
        return (
        <li class="nav-item text-end">
            <Link class="nav-link" to="/logout">Logout</Link>
        </li>
        );
    }
    else {
        return (
        <li class="nav-item text-end">
            <Link class="nav-link" to="/login">Login</Link>
        </li>
         );
    }
}

