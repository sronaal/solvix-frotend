import axios from "axios";

export const IniciarSesion = (credenciales) => {

    return axios.post('http://localhost:3000/api/auth/login', credenciales)
}