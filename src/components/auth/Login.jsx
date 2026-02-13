import React, { useState } from 'react'
import { SolvixLogo } from '../SolvixLogo'
import { GrInsecure } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form';
import { IniciarSesion } from '../../services/AuthApi';
import { useAuth } from '../../context/AuthContext';

const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [showPassword, setShowPassword] = useState(true)
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    IniciarSesion({ correo: data.email, password: data.password })
      .then(response => {
        console.log(response)
        // The server returns the user data and token directly in response.data
        const { token, ...userData } = response.data;

        // Map backend 'rol' to frontend 'role' expected by ProtectedRoute
        const user = {
          ...userData,
          role: userData.rol
        };

        login(user, token)
        localStorage.setItem("data", JSON.stringify(user))
        navigate("/solvix")
      })
      .catch((error) => {
        console.log("Error al iniciar sesión:", error)
        if (error.status === 401) {
          alert("Credenciales incorrectas")
        }
        if (error.code === 'ERR_NETWORK') {
          alert("Error de red. Por favor, verifica que el servidor esté en funcionamiento.")
        }
      })

  }
  return (
    <div className='flex justify-center items-center w-full px-4'>
      <div className='w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50 p-6 lg:p-10'>

        {/* Left Side - Brand/Welcome */}
        <div className="flex flex-col justify-center space-y-6 lg:pr-8">
          <div className="mb-4">
            <SolvixLogo className="h-12 w-auto" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-(--color-primary-4) tracking-tight">
              Bienvenido de nuevo
            </h1>
            <p className="mt-3 text-lg text-(--color-text-2)">
              Gestiona tus tickets y usuarios de forma eficiente con Solvix.
            </p>
          </div>
          <div className="hidden lg:block mt-8">
            <div className="flex items-center space-x-4 text-sm text-(--color-text-2)">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs font-bold text-indigo-600">A</div>
                <div className="w-8 h-8 rounded-full bg-violet-100 border-2 border-white flex items-center justify-center text-xs font-bold text-violet-600">B</div>
                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">C</div>
              </div>
              <p>Únete a más de 200+ empresas</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className='bg-white/50 rounded-2xl p-6 lg:p-8 shadow-sm border border-white/60'>
          <h2 className='text-xl font-semibold text-gray-800 mb-6'>Iniciar Sesión</h2>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-5'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1.5'>Correo electrónico</label>
              <div className='relative'>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  className='block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) transition duration-150 ease-in-out sm:text-sm'
                  type='email'
                  placeholder='tu@empresa.com'
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs mt-1">El correo es obligatorio</span>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1.5'>Contraseña</label>
              <div className='relative'>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GrInsecure className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  className='block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) transition duration-150 ease-in-out sm:text-sm'
                  type={showPassword ? "text" : "password"}
                  placeholder='••••••••'
                  {...register("password", { required: true })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {showPassword ? (
                    <FaEye
                      className='h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors'
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaEyeSlash
                      className='h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors'
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
              {errors.password && <span className="text-red-500 text-xs mt-1">La contraseña es obligatoria</span>}
            </div>

            <div className="flex items-center justify-end">
              <Link
                className='text-sm font-medium text-(--color-primary) hover:text-(--color-primary-2) transition-colors'
                to="forgot-password"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type='submit'
              className='w-full flex justify-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-(--color-primary) hover:bg-(--color-primary-2) focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--color-primary) transition-all duration-200 transform hover:-translate-y-0.5'
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
