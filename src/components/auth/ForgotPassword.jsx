import { FiUser } from "react-icons/fi";
import Content from "./Content";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full px-6 py-10 md:px-16 lg:px-4">
      <Content />

      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white mt-10 lg:mt-0 lg:ml-20 rounded-lg p-6 shadow-lg">
        <h1 className="text-xl font-semibold">Recuperar Contraseña</h1>
        <p className="text-sm text-(--color-text) mb-8">
          Recupere su contraseña enviando un correo electrónico
        </p>

        <form className="flex flex-col">
          <div className="relative w-full">
            <FiUser className="absolute left-2 top-3 size-5 text-[#2563EB]" />
            <input
              type="email"
              placeholder="email@empresa.com"
              className="rounded-lg p-2 bg-gray-100 pl-9 w-full text-gray-400 focus:text-gray-600"
            />
          </div>

          <button className="bg-(--color-primary) w-full text-white rounded-lg p-2 mt-6 hover:bg-(--color-primary-2) transition-colors cursor-pointer">
            Enviar
          </button>

          <p className="text-center mt-3 text-sm">
            ¿Ya tienes tu contraseña?{" "}
            <span className="hover:text-[#2563EB]">
              <Link to="/auth">Iniciar Sesión</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
