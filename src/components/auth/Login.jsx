import React, { useState } from 'react'
import { SolvixLogo } from '../SolvixLogo'
import { GrInsecure } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import Content from './Content'
import { useForm } from 'react-hook-form';
import { IniciarSesion } from '../../services/AuthApi';
import { useAuth } from '../../context/AuthContext';

const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [showPassword, setShowPassword] = useState(true)
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    IniciarSesion({correo: data.email, password: data.password})
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
    <div className='flex flex-col lg:flex-row justify-center items-center px-6 py-10 md:px-16 lg:px-4 w-full'>
      <Content />

      <div className='w-full max-w-sm md:max-w-md lg:max-w-lg bg-white mt-10 lg:mt-0 lg:ml-20 rounded-lg p-6 shadow-lg'>
        <p className='text-xl font-semibold'>Bienvenido</p>
        <p className='text-sm text-(--color-text)'>Inicia sesión en tu cuenta.</p>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
          <label className='mt-4 text-(--color-text) mb-2'>Correo electrónico</label>

          <div className='mb-2 relative w-full'>
            <FiUser className='absolute left-2 top-3 size-5 text-[#2563EB]' />
            <input
              className='rounded-lg p-2 border-0 bg-gray-100 pl-9 w-full text-gray-400 focus:text-gray-600'
              type='email'
              placeholder='email@empresa.com'
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">El correo es obligatorio</span>}

          </div>

          <label className='mt-4 mb-2 text-(--color-text)'>Contraseña</label>

          <div className='mb-2 relative w-full'>
            <GrInsecure className='absolute left-2 top-3 size-5 text-[#2563EB]' />
            <input
              className='rounded-lg p-2 bg-gray-100 pl-9 w-full text-gray-400 focus:text-gray-600'
              type={showPassword ? "text" : "password"}
              placeholder='*********'
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500 text-sm">La contraseña es obligatoria</span>}

            {showPassword ? (
              <FaEye
                className='absolute right-3 top-3 size-5 cursor-pointer text-[#2563EB]'
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEyeSlash
                className='absolute right-3 top-3 size-5 cursor-pointer text-[#2563EB]'
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {errors.exampleRequired && <span>This field is required</span>}


          <Link
            className='text-sm text-(--color-primary) self-end mt-2 hover:underline'
            to="forgot-password"
          >
            ¿Olvidaste tu contraseña?
          </Link>

          <button type='submit' className='bg-(--color-primary) text-white rounded-lg p-2 mt-6 hover:bg-(--color-primary-2) transition-colors cursor-pointer'>
            Iniciar sesión

          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
