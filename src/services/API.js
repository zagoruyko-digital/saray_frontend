import Cookies from 'js-cookie';

export const API = {
    development: '127.0.0.1:8000',
    production: '138.197.142.45:8000',

    v0: '/api/v0/',
};

export const getAccessToken = () => Cookies.get('access_token')
export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => !!getAccessToken()