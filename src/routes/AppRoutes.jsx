import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Login from '../components/auth/Login'
import LadingPage from '../pages/ladingpage/LadingPage'
import ForgotPassword from '../components/auth/ForgotPassword'
import RootLayout from '../layout/RootLayout'
import { AdminPage } from '../pages/AdminPage'
import { AsignacionTicketPage } from '../pages/AsignacionTicketPage'
import { GestionUsuariosPage } from '../pages/GestionUsuariosPage'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='forgot-password' element={<ForgotPassword />}></Route>
        </Route>
        <Route path='/' element={<LadingPage />}></Route>
        <Route path='solvix' element={<RootLayout />}>
          <Route index path='' element={<AdminPage />}/>
          <Route path='asignar' element={<AsignacionTicketPage/>}/>
          <Route path='usuarios' element={<GestionUsuariosPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes