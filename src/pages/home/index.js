import React, { Component } from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style.js';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount() {
        this.props.getHomeList();
    }
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4602/249f8f28449b109dfd49c10347d654abada7fbfe.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        getHomeList() {
            const action = actionCreators.getHomeList();
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatch)(Home);