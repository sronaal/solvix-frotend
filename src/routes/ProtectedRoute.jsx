import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export const ProtectedRoute = ({ allowRoles }) => {

    const { isAuthenticated, user, loading } = useAuth();

    if (loading) return <h1>Cargando...</h1>

    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />
    }

    if (allowRoles && !allowRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />
    }

    return <Outlet />
}