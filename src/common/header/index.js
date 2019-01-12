import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
    WrapperHeader,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends Component {
    getListArea() {
        const { focused, mouseIn, list, page, pageTotal, handleMouseEnter, handleMouseLeave, hanldeListSwitch } = this.props;
        const jsList = list.toJS(); // 要把immutable数组转为普通的js数组才能正常输出结果
        const showList = [];
        if(jsList.length > 0) {
            for(var i = (page - 1) * 10; i < page * 10 && i < jsList.length; i++) {
                showList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => hanldeListSwitch(page, pageTotal, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {showList}                    
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        return (
            <WrapperHeader>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe601;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </WrapperHeader>
        )
    }
}
// 结合combineReducers中定义的别名
const mapStateToProps = (state) => {
    return {
        // 等价的写法
        // focused: state.getIn(['header', 'focused'])
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        page: state.getIn(['header', 'page']),
        pageTotal: state.getIn(['header', 'pageTotal'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // 只有没有数据的时候才发送请求
            if(list.size === 0) dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        hanldeListSwitch(page, pageTotal, spin) {
            // 添加动画效果
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if(page < pageTotal)
                dispatch(actionCreators.headerListSwitch(page+1));
            else
            dispatch(actionCreators.headerListSwitch(1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);