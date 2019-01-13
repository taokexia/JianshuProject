import { fromJS } from 'immutable'
import { GET_HOME_LIST } from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case GET_HOME_LIST:
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articleList': fromJS(action.articleList),
                'recommendList': fromJS(action.recommendList),
                'writerList': fromJS(action.writerList)
            })
        default:
            return state;
    }
}