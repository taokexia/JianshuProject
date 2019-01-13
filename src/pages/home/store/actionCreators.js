import axios from 'axios';
import { GET_HOME_LIST } from './constants';

export const getHomeList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((resp) => {
            const data = resp.data;
            dispatch(getHomeInfo(data.data));
        })
    }
}

const getHomeInfo = (data) => {
    return {
        type: GET_HOME_LIST,
        topicList: data.topicList,
        articleList: data.articleList,
        recommendList: data.recommendList,
        writerList: data.writerList
    }
}