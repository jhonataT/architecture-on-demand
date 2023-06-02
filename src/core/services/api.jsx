import axios from 'axios';

export const Api = (token = null) => {
    
    const headers = {
        Authorization: `Bearer ${token}`
    };
    
    return axios.create({
        baseURL: "http://68.183.127.52:3000",
        headers: token ? headers : {}
    });
}