import React, { useState } from 'react'
import { SolvixLogo } from '../SolvixLogo'
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { IniciarSesion } from '../../services/AuthApi';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await IniciarSesion({ correo: data.email, password: data.password });
      const { token, ...userData } = response.data;
      const user = { ...userData, role: userData.rol };

      login(user, token)
      localStorage.setItem("data", JSON.stringify(user))
      navigate("/solvix")
    } catch (error) {
      console.error("Login error:", error)
      const message = error.status === 401 || error.status === 404
        ? "Credenciales incorrectas"
        : "Error de conexión con el servidor";
      alert(message);
    }
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#fcfdfe] relative overflow-hidden'>
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/10 blur-[120px] rounded-full animate-pulse px-20"></div>

      <div className='w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[40px] shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative z-10'>

        {/* Left Side: Brand Story */}
        <div className="relative p-10 lg:p-16 flex flex-col justify-between bg-slate-50/50">
          <div>
            <SolvixLogo className="h-10 w-auto mb-12" />
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Impulsa tu <span className="text-indigo-600">Soporte Técnico</span> al Siguiente Nivel.
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-md">
              La plataforma inteligente para la gestión de incidencias que transforma el soporte en una ventaja competitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: BadgeCheck, label: 'Auditado' },
              { icon: ShieldCheck, label: 'Seguro' },
              { icon: Zap, label: 'Rápido' }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <div className="p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:bg-indigo-50 transition-colors">
                  <feature.icon className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Identity Check */}
        <div className='p-10 lg:p-16 flex flex-col justify-center'>
          <div className="mb-10 text-center lg:text-left">
            <h2 className='text-2xl font-black text-slate-900'>Acceso al Portal</h2>
            <p className='text-slate-400 mt-2 font-medium'>Ingresa tus credenciales autorizadas</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className="space-y-2">
              <label className='text-xs font-bold text-slate-500 uppercase tracking-[0.15em] ml-1'>Email Corporativo</label>
              <div className='relative group'>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-indigo-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  className='block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 focus:bg-white transition-all outline-none leading-relaxed'
                  type='email'
                  placeholder='usuario@empresa.com'
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && <span className="text-rose-500 text-[10px] font-bold uppercase ml-1">Requerido</span>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <label className='text-xs font-bold text-slate-500 uppercase tracking-[0.15em]'>Contraseña</label>
                <Link className='text-[10px] font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-wider' to="/forgot-password">¿Duda?</Link>
              </div>
              <div className='relative group'>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-indigo-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  className='block w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-semibold text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 focus:bg-white transition-all outline-none leading-relaxed'
                  type={showPassword ? "text" : "password"}
                  placeholder='••••••••••••'
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <span className="text-rose-500 text-[10px] font-bold uppercase ml-1">Requerido</span>}
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='group w-full flex items-center justify-center gap-2 py-4.5 px-6 rounded-2xl shadow-[0_12px_24px_-8px_rgba(79,70,229,0.3)] text-sm font-black text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:pointer-events-none'
            >
              {isSubmitting ? 'Verificando...' : 'Iniciar Sesión'}
              {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <p className="mt-12 text-center text-slate-400 text-[11px] font-medium leading-relaxed">
            Al ingresar, aceptas nuestros <span className="text-slate-600 font-bold underline cursor-pointer">Términos de Servicio</span> y <span className="text-slate-600 font-bold underline cursor-pointer">Privacidad</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

