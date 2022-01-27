import Cookies from 'js-cookie';

export const getToken = () => Cookies.get('token');

export const setToken = (value) => Cookies.set('token', value);

export const deleteToken = () => Cookies.remove('token');
