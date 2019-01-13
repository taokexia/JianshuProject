import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
    title: "",
    content: ""
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_DETAIL_INFO:
            return state.merge({
                title: action.title,
                content: action.content
            });
        default:
            return state;
    }
}