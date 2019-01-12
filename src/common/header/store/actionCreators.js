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

export const mouseEnter = () => {
    return {
        type: constants.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: constants.MOUSE_LEAVE
    }
}

export const headerListSwitch = (page) => {
    return {
        type: constants.HEADER_LIST_SWITCH,
        page
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
        data: fromJS(data),
        pageTotal: Math.ceil(data.length / 10)
    }
}