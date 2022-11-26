import axios from 'axios';

export const registerAcc = async ({ email, password, password_confirmation }) => {
    return await axios.post('http://206.189.91.54/api/v1/auth/', { email, password, password_confirmation })
}

export const logIn = async ({ email, password }) => {
    return await axios.post('http://206.189.91.54/api/v1/auth/sign_in', { email, password })
}

export const retrieveChannels = async (data) => {
    const config = { method: "GET", headers: { "Content-Type": "application/json", ...data }};
    const res = await fetch('http://206.189.91.54/api/v1/channels', config)

    return await res.json()
}
