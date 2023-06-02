import React from 'react';
import axios from 'axios';

export const Api = (token = null) => {
    
    const headers = {
        Authorization: `Bearer ${token}`
    };
    
    return axios.create({
        baseURL: `http://localhost:3000`,
        headers: token ? headers : {}
    });
}