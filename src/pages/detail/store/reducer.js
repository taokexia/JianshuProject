import { fromJS } from 'immutable';

const defaultState = fromJS({
    title: "我们的美国梦，关于纽约华人卖淫街的故事",
    content: '<img src="https://upload-images.jianshu.io/upload_images/11387038-87d1372898224ab9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt=""/><p>根据外媒报道，原题为<b>《The Case of Jane Doe Ponytail——An epic tragedy on a small block in Queens》</b></p><p>在美国纽约有一条几乎所有老华人都知道的卖淫街，这条街是全纽约最臭名昭著的“华人卖淫街”</p><p>这条街上的卖淫女，因为各种原因，全都来自中国。这就是纽约皇后区，法拉盛的40路</p>'
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}