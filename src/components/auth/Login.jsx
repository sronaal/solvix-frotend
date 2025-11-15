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
    <div className='flex'>
      <Content />
      <div className='w-[600px] h-fit bg-white m-20 md:mt-30 rounded-lg p-4 shadow-lg'>
        <p>Bienvenido</p>
        <p className='text-sm text-(--color-text)'>Inicia sesión en tu cuenta.</p>

        <form className='flex flex-col'>
          <label className='mt-4 text-(--color-text) mb-2'>Correo electrónico</label>

          <div className='mb-2 relative'>
            <FiUser className='absolute top-2 ml-1 size-6 text-[#2563EB]' />
            <input className='rounded-lg p-2 border-0 bg-gray-100 pl-8 w-full'
              type={showPassword ? "text" : "password"}
              placeholder='email@empresa.com' />
          </div>

          <label className='mt-4 mb-2 text-(--color-text)'>Contraseña</label>
          <div className='mb-2 relative'>
            <GrInsecure className='absolute ml-1 top-2 size-6 text-[#2563EB]' />
            <input
              className='rounded-lg p-2 bg-gray-100 pl-8 w-full'
              type={showPassword ? "text" : "password"}
              placeholder='*********'
            />

            {showPassword ? (
              <FaEyeSlash
                className='absolute ml-[93%] top-3 size-5 cursor-pointer text-[#2563EB]'
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className='absolute ml-[93%] top-3 size-5 cursor-pointer text-[#2563EB]'
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <Link className='text-sm text-(--color-primary) items-end self-end mt-2 hover:underline' to="forgot-password">¿Olvidaste tu contraseña?</Link>
          <button className='bg-(--color-primary) text-white rounded-lg p-2 mt-6 hover:bg-(--color-primary-2) transition-colors cursor-pointer'>Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default Login