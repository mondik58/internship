import Cookies from 'js-cookie';
import {TOKEN_NAME} from 'constants/auth';

export const getToken = () => Cookies.get(TOKEN_NAME);

export const setToken = (value) => Cookies.set(TOKEN_NAME, value);

export const deleteToken = () => Cookies.remove(TOKEN_NAME);
