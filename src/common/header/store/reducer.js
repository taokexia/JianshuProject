import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1, // 当前Search页数
    pageTotal: 1 // Search总页数
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.GET_HEADER_LIST:
            return state.merge({
                'list': action.data,
                'pageTotal': action.pageTotal
            })
            // return state.set('list', action.data).set('pageTotal', action.pageTotal);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.HEADER_LIST_SWITCH:
            return state.set('page', action.page);
        default:
            return state;
    }
}