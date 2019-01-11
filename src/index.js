import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { Iconfont } from './static/iconfont/iconfont';
import App from './App';


ReactDOM.render(
    <Fragment>
        <GlobalStyle/>
        <Iconfont/>
        <App />
    </Fragment>, document.getElementById('root'));
