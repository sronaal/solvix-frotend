import React from 'react'
import { SolvixLogo } from '../SolvixLogo'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='hidden md:flex flex-col  gap-10 ml-20 mt-20  w-[600px] h-fit rounded-lg bg-white/10'>
        <SolvixLogo />
        <p className='text-xl'>Gestión inteligente de incidencias</p>
        <h2 className='text-(--color-text-2) text-xl w-[600px]'>Registra, asigna y da seguimiento a todas las solicitudes de soporte de tu empresa en una sola plataforma.</h2>
        <section>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center'>
              <span className='w-10 h-10 flex justify-center  items-center rounded-full bg-(--color-primary-3) mr-4 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1200 1200"><path fill="#1453F2" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600c331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629c0 259.305-210.187 469.556-469.556 469.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zm229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754l-111.401-111.401z" /></svg>
              </span>
              <div>
                <p className='text-bold'>Seguimiento en tiempo real</p>
                <p className='text-(--color-text)'>Monitorea el estado de cada ticket instantáneamente</p>
              </div>
            </div>
            <div className='flex items-center'>
              <span className='w-10 h-10 flex justify-center  items-center rounded-full bg-(--color-primary-3) mr-4 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1200 1200"><path fill="#1453F2" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600c331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629c0 259.305-210.187 469.556-469.556 469.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zm229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754l-111.401-111.401z" /></svg>
              </span>
              <div>
                <p className='text-bold'>Asignación inteligente</p>
                <p className='text-(--color-text)'>Distribuye automáticamente las tareas al equipo correcto</p>
              </div>
            </div>
            <div className='flex items-center'>
              <span className='w-10 h-10 flex justify-center  items-center rounded-full bg-(--color-primary-3) mr-4 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1200 1200"><path fill="#1453F2" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600c331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629c0 259.305-210.187 469.556-469.556 469.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zm229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754l-111.401-111.401z" /></svg>
              </span>
              <div>
                <p className='text-bold'>Reportes detallados</p>
                <p className='text-(--color-text)'>Analiza métricas y mejora continuamente tu servicio</p>
              </div>
            </div>

          </div>
        </section>
      </div>
      <div className='w-[600px] h-fit bg-white m-20 md:mt-30 rounded-lg p-4 shadow-lg'>
        <p>Bievenidio</p>
        <p className='text-sm text-(--color-text)'>Inicia sesión en tu cuenta o crea una nueva</p>

        <form className='flex flex-col'>
          <label className='mt-4 mb-2 text-(--color-text)'>Correo electrónico</label>
          <input className='rounded-lg p-2 border-0 bg-gray-100 pl-8' type="email" placeholder='email@empresa.com' />
          <label className='mt-4 mb-2 text-(--color-text)'>Contraseña</label>
          <input className='rounded-lg p-2 bg-gray-100 pl-8' type="password" placeholder='*********' />
          <Link className='text-sm text-(--color-primary) items-end self-end mt-2 hover:underline' to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          <button className='bg-(--color-primary) text-white rounded-lg p-2 mt-6 hover:bg-(--color-primary-2) transition-colors'>Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default Login