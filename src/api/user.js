const BASH_URL = "https://binar-project-production.up.railway.app";
import axios from 'axios'
import getCookieValue from './getCookie';
const tokenCookie = getCookieValue("token")

export const consumeUserApi = {
    getCurrentUser : async () => {
        try {
            const res = await axios.get(`${BASH_URL}/auth/current-user`, {
                headers: {
                    'Authorization': `Bearer ${tokenCookie}`,
                    'Content-Type': 'application/json',
                }
            });
    
            return res.data.data;
        } catch (error) {
            return error
        }
    }, 

    updateUser: async (payload) => {
        try {
            const res = await axios.put(`${BASH_URL}/users`, payload ,{
                headers: {
                    'Authorization': `Bearer ${tokenCookie}`,
                    'Content-Type': 'application/json',
                }
            });
    
            return res.data;
        } catch (error) {
            return error
        }
    },

    updatePassword : async (payload) => {
        try {
            const res = await axios.put(`${BASH_URL}/users/change-password`, payload ,{
                headers: {
                    'Authorization': `Bearer ${tokenCookie}`,
                    'Content-Type': 'application/json',
                }
            });
    
            return res.data;
        } catch (error) {
            return error
        }
    },
}