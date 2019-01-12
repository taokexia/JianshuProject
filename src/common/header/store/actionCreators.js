import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
}

export const searchBlur = () => {
    return {
        type: constants.SEARCH_BLUR
    }
}

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(getHeaderList(data.data));
        }).catch(() => {
            console.log('error');
        });
    }
}

const getHeaderList = (data) => {
    return {
        type: constants.GET_HEADER_LIST,
        data: fromJS(data)
    }
}