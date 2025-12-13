import axios from "axios";

export const login = (credenciales) => {

    return axios.post('http://localhost:3000/api/auth/login', credenciales)
}