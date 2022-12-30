import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import Log from './Log'
import { useSelector } from 'react-redux'






const Header = () => {

    const nameofuser = useSelector(state => state.authState.username);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand mx-5" to="/">GradeWork</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav flex-lg-grow-1">

                        <li class="nav-item">
                            <Link class="nav-link" to="/lessons">Lessons</Link>
                        </li>

                        <Adminis/>

                        <IsTeacher/>
                    </ul>
                    <ul class="navbar-nav">
                        <Log />
                        <li class="nav-item">
                            <p class="nav-link m-0 mr-3" >{nameofuser}</p>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header


export const Adminis = () => {
    const role = useSelector(state => state.authState.userrole);
    if(role==="admin"){

    
    return (
        <li class="nav-item">
            <Link class="nav-link" to="/admin">Admin</Link>
        </li>
    )
    }
}

export const IsTeacher = () => {
    const role = useSelector(state => state.authState.userrole);
    console.log(role)
    if(role==="Teacher"){

    return (
        <li class="nav-item">
            <Link class="nav-link" to="/teacher">Add Lesson</Link>
        </li>
    )
    }
}
