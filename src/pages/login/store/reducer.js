import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.SET_LOGIN:
            return state.set('login', action.data);
        case constants.LOGOUT:
            return state.set('login', false);
        default:
            return state;
    }
}