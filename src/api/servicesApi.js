const BASH_URL = "https://binar-project-production.up.railway.app";
import axios from 'axios'
// import getCookieValue from './getCookie';
// const tokenCookie = getCookieValue("token")

export const postLogin = async (payload) => {
    try {
        const response = await axios.post(`${BASH_URL}/auth/login`, payload);
        return response
    } catch (error) {
        return error
    }
}