import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
    WrapperHeader,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Addition,
    Button
} from './style';

class Header extends Component {
    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props;
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
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
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
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            }
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);