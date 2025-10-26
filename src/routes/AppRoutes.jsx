import { Routes, Route} from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Login from '../components/auth/Login'
import LadingPage from '../pages/ladingpage/LadingPage'
import ForgotPassword from '../components/auth/ForgotPassword'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='auth' element={ <AuthLayout/>}>
                <Route index element={ <Login/> }></Route>
                <Route path='login' element={ <Login/> }></Route>
                <Route path='forgot-password' element={ <ForgotPassword/> }></Route>
            </Route>
            <Route path='/' element={ <LadingPage/>}></Route>
        </Routes>
    </>
  )
}

export default AppRoutes