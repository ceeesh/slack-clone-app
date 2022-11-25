import axios from 'axios';

export const registerAcc = (email, password, password_confirmation) => {
    return axios.post('http://206.189.91.54//api/v1/auth/',email, password, password_confirmation)
}

export const logIn = (email, password) => {
    return axios.post('http://206.189.91.54//api/v1/auth/sign_in', email, password)
}