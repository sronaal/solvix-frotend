import React, { useState } from 'react'
import { SolvixLogo } from '../SolvixLogo'
import { GrInsecure } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Content from './Content'

const Login = () => {
  const [showPassword, setShowPassword] = useState(true)

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center px-6 py-10 md:px-16 lg:px-4 w-full'>
      <Content />

      <div className='w-full max-w-sm md:max-w-md lg:max-w-lg bg-white mt-10 lg:mt-0 lg:ml-20 rounded-lg p-6 shadow-lg'>
        <p className='text-xl font-semibold'>Bienvenido</p>
        <p className='text-sm text-(--color-text)'>Inicia sesión en tu cuenta.</p>

        <form className='flex flex-col mt-4'>
          <label className='mt-4 text-(--color-text) mb-2'>Correo electrónico</label>

          <div className='mb-2 relative w-full'>
            <FiUser className='absolute left-2 top-3 size-5 text-[#2563EB]' />
            <input
              className='rounded-lg p-2 border-0 bg-gray-100 pl-9 w-full text-gray-400 focus:text-gray-600'
              type='email'
              placeholder='email@empresa.com'
            />
          </div>

          <label className='mt-4 mb-2 text-(--color-text)'>Contraseña</label>

          <div className='mb-2 relative w-full'>
            <GrInsecure className='absolute left-2 top-3 size-5 text-[#2563EB]' />
            <input
              className='rounded-lg p-2 bg-gray-100 pl-9 w-full text-gray-400 focus:text-gray-600'
              type={showPassword ? "text" : "password"}
              placeholder='*********'
            />

            {showPassword ? (
              <FaEyeSlash
                className='absolute right-3 top-3 size-5 cursor-pointer text-[#2563EB]'
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className='absolute right-3 top-3 size-5 cursor-pointer text-[#2563EB]'
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <Link
            className='text-sm text-(--color-primary) self-end mt-2 hover:underline'
            to="forgot-password"
          >
            ¿Olvidaste tu contraseña?
          </Link>

          <button className='bg-(--color-primary) text-white rounded-lg p-2 mt-6 hover:bg-(--color-primary-2) transition-colors cursor-pointer'>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
