import Cookies from 'js-cookie';

export const getToken = () => Cookies.get('internship');

export const setToken = (value) => Cookies.set('internship', value);

export const deleteToken = () => Cookies.remove('internship');
