import { FiUser } from "react-icons/fi";
import Content from "./Content"
import { Link } from 'react-router-dom'
import { useState } from "react";



const ForgotPassword = () => {


  return (
    <div className="flex flex-col lg:flex-row justify-center items-center ml-10 mr-10 p-30 sm:p-20 lg:p-1">
      <Content />
      <div className="bg-white m w-[500px] md:mt-40 ml-20 mt-32 md:ml-20 h-fit  rounded-lg p-8 shadow-lg">
        <h1>Recuperar Contraseña</h1>
        <p className="text-sm text-(--color-text) mb-10">Recupere su contraseña enviando un correo electronico</p>

        <form>
          <div className="relative">

            <FiUser className='absolute top-2 ml-1 size-6 text-[#2563EB]' />
            <input className='rounded-lg p-2 border-0 bg-gray-100 pl-8 w-full text-gray-400 focus:text-gray-600' type="email" placeholder='email@empresa.com' />
          </div>

         
          <button className='bg-(--color-primary) w-full text-white rounded-lg p-2 mt-6 hover:bg-(--color-primary-2) transition-colors cursor-pointer'>Enviar</button>
          <p className="text-center mt-2 text-sm">¿Ya tienes tu contraseña? <span className="hover:text-[#2563EB]"> <Link to='/auth'>Iniciar Sesión</Link> </span> </p>
        </form>


      </div>
    </div>

  )
}

export default ForgotPassword