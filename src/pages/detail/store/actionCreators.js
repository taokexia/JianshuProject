import axios from 'axios';
import { constants } from './index';

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detailList.json?id='+id).then((resp) => {
            const data = resp.data;
            dispatch(getDetailInfo(data.data));
        })
    }
}

const getDetailInfo = (data) => ({
    type: constants.GET_DETAIL_INFO,
    title: data.title,
    content: data.content
})
