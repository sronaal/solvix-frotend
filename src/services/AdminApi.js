import axios from "axios";


export const getUsers = () => {

    return axios.get('http://localhost:3000/api/users')
}