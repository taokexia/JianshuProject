import axios from 'axios';
import { GET_HOME_LIST, ADD_HOME_ARTICLE, TOGGLE_SCROLL_TOP } from './constants';

export const getMoreArticle = (page) => {
    // 获取更多文章
    return (dispatch) => {
        axios.get('/api/articleList.json').then((resp) => {
            const data = resp.data;
            dispatch(addHomeArticle(data.data, page));
        });
    }
}

export const getHomeList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((resp) => {
            const data = resp.data;
            dispatch(getHomeInfo(data.data));
        });
    }
}

export const toggleScrollShow = (show) => ({
    type: TOGGLE_SCROLL_TOP,
    show
})

const getHomeInfo = (data) => {
    return {
        type: GET_HOME_LIST,
        topicList: data.topicList,
        articleList: data.articleList,
        recommendList: data.recommendList,
        writerList: data.writerList
    }
}

const addHomeArticle = (data, page) => {
    return {
        type: ADD_HOME_ARTICLE,
        articleList: data,
        articlePage: page+1
    }
}