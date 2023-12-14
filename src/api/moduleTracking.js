const BASH_URL = "https://binar-project-production.up.railway.app";
import axios from 'axios'
import getCookieValue from './getCookie';
const tokenCookie = getCookieValue("token")

export const consumeModuleTrackingsApi = {
    getModuleTrackingsByUser : async () => {
        try {
            const res = await axios.get(`${BASH_URL}/moduleTrackings/user`, {
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
    createModuleTrackingsUser : async (payload) => {
        try {
            const res = await axios.post(`${BASH_URL}/moduleTrackings`, payload, {
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
    updateModuleTrackingsUser : async (payload) => {
        try {
            const res = await axios.put(`${BASH_URL}/moduleTrackings`, payload, {
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