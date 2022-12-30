import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const ProtectedRouteForTeacher = ({ children }) => {
    const role = useSelector(state => state.authState.userrole);
    if (role === "Teacher") {
        return children
    }
    else {
        return <Navigate to="/login" />
    }

}
