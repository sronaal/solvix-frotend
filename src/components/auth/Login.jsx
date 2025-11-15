import React from 'react'
import { SolvixLogo } from '../SolvixLogo'
import { Link } from 'react-router-dom'
import Content from './Content'

const Login = () => {
  return (
    <div className='flex'>
      <Content/>
      <div className='w-[600px] h-fit bg-white m-20 md:mt-30 rounded-lg p-4 shadow-lg'>
        <p>Bievenidio</p>
        <p className='text-sm text-(--color-text)'>Inicia sesión en tu cuenta.</p>

        <form className='flex flex-col'>
          <label className='mt-4 text-(--color-text)'>Correo electrónico</label>

          <div className='mb-2 relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='absolute    top-3 ml-2' viewBox="0 0 1024      1024"><path fill="#155DFC" d="M511.728 64c108.672 0 223.92 91.534 223.92 159.854v159.92c0 61.552-25.6 179.312-94.256 233.376a63.99 63.99 0 0 0-23.968 57.809c2.624 22.16 16.592 41.312 36.848 50.625l278.496 132.064c2.176.992 26.688 5.104 26.688 39.344l.032 62.464L64 959.504V894.56c0-25.44 19.088-33.425 26.72-36.945l281.023-132.624c20.16-9.248 34.065-28.32 36.769-50.32c2.72-22-6.16-43.84-23.456-57.712c-66.48-53.376-97.456-170.704-97.456-233.185v-159.92C287.615 157.007 404.016 64 511.728 64zm0-64.002c-141.312 0-288.127 117.938-288.127 223.857v159.92c0 69.872 31.888 211.248 121.392 283.088l-281.04 132.64S.001 827.999.001 863.471v96.032c0 35.344 28.64 63.968 63.951 63.968h895.552c35.344 0 63.968-28.624 63.968-63.968v-96.032c0-37.6-63.968-63.968-63.968-63.968L681.008 667.439c88.656-69.776 118.656-206.849 118.656-283.665v-159.92c0-105.92-146.64-223.855-287.936-223.855z" /></svg>
            <input className='rounded-lg p-2 border-0 bg-gray-100 pl-8 w-full' type="email" placeholder='email@empresa.com' />

          </div>
          <label className='mt-4 mb-2 text-(--color-text)'>Contraseña</label>

          <div className='mb-2 relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='absolute ml-2 top-2' viewBox="0 0 48 48"><path fill="none" stroke="#155DFC" stroke-linecap="round" stroke-linejoin="round" d="M10.16 19.241h27.68a1.9 1.9 0 0 1 1.901 1.9V41.6a1.9 1.9 0 0 1-1.9 1.9H10.16a1.9 1.9 0 0 1-1.901-1.9V21.142a1.9 1.9 0 0 1 1.9-1.9"/><path fill="none" stroke="#155DFC" stroke-linecap="round" stroke-linejoin="round" d="M13.582 19.241v-4.363c.017-5.75 4.692-10.396 10.441-10.378c5.724.018 10.36 4.654 10.378 10.378v4.363"/><circle cx="23.991" cy="27.367" r="4.037" fill="none" stroke="#155DFC" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="#155DFC" stroke-linecap="round" stroke-linejoin="round" d="M24 31.918v3.675"/></svg>
            <input className='rounded-lg p-2 bg-gray-100 pl-8 w-full' type="password" placeholder='*********' />
          </div>
          <Link className='text-sm text-(--color-primary) items-end self-end mt-2 hover:underline' to="forgot-password">¿Olvidaste tu contraseña?</Link>
          <button className='bg-(--color-primary) text-white rounded-lg p-2 mt-6 hover:bg-(--color-primary-2) transition-colors cursor-pointer'>Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default Login