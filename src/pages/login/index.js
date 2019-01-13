import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
class Login extends PureComponent {

    render() {
        const { login } = this.props;
        if (!login) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => this.name = input} />
                        <Input placeholder="密码" ref={(input) => this.password = input} type="password" />
                        <Button onClick={() => { this.props.getLogin(this.name, this.password) }}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    login: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => {
    return {
        getLogin(nameElem, passwordElem) {
            dispatch(actionCreators.getLogin(nameElem.value, passwordElem.value));
        }
    }
}

export default connect(mapState, mapDispatch)(Login);