import { fromJS } from 'immutable'
import { GET_HOME_LIST, ADD_HOME_ARTICLE, TOGGLE_SCROLL_TOP } from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 0,
    showScroll: false
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case GET_HOME_LIST:
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articleList': fromJS(action.articleList),
                'recommendList': fromJS(action.recommendList),
                'writerList': fromJS(action.writerList)
            });
        case ADD_HOME_ARTICLE:
            return state.set("articleList", state.get('articleList').concat(fromJS(action.articleList)))
                    .set("articlePage", action.articlePage);
        case TOGGLE_SCROLL_TOP:
            return state.set("showScroll", action.show);
        default:
            return state;
    }
}