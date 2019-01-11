import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { Iconfont } from './static/iconfont/iconfont';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Fragment>
            <GlobalStyle />
            <Iconfont />
            <App />
        </Fragment>
    </Provider>, document.getElementById('root'));
