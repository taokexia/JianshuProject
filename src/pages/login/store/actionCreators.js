import axios from 'axios';
import * as constants from './constants';

export const getLogin = (name, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?name='+name+'&password='+password).then((resp) => {
            const data = resp.data.data;
            dispatch(setLogin(data));
        })
    }
}

export const logout = () => ({
    type: constants.LOGOUT
})

const setLogin = (data) => ({
    type: constants.SET_LOGIN,
    data
})