import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const ProtectedRoute = ({ children }) => {
    const role = useSelector(state => state.authState.userrole);
    if (role === "admin") {
        return children
    }
    else {
        return <Navigate to="/login" />
    }

}
