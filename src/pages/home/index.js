import React, { PureComponent } from 'react';
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
import { BackTop } from './style';

class Home extends PureComponent {
    componentDidMount() {
        this.props.getHomeList();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
    handleScrollTop() {
        window.scrollTo(0, 0);
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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getHomeList() {
            const action = actionCreators.getHomeList();
            dispatch(action);
        },
        changeScrollTopShow() {
            if(document.documentElement.scrollTop > 400) {
                dispatch(actionCreators.toggleScrollShow(true));
            } else {
                dispatch(actionCreators.toggleScrollShow(false));
            }
        }
    }
}

export default connect(mapState, mapDispatch)(Home);