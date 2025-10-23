import { Routes, Route} from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Login from '../components/auth/Login'
import LadingPage from '../pages/ladingpage/LadingPage'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='auth' element={ <AuthLayout/>}>
                <Route index element={ <Login/> }></Route>
            </Route>
            <Route path='/' element={ <LadingPage/>}></Route>
        </Routes>
    </>
  )
}

export default AppRoutes