import React, { Component } from 'react';
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
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe62d;</i>
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

export default Header;