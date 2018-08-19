import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { loginActionCreaters } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {

  render() {

    const { loginStatus } = this.props;

    if(!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            {/*获取Dom节点时 如果是component的styled组件，要使用styled提供的innerRef属性*/}
            <Input
              placeholder='账号'
              innerRef={(input) => {this.account = input}}
            />
            <Input
              placeholder='密码'
              type='password'
              innerRef={(input) => {this.password = input}}
            />
            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to='/' />
    }

  }

}

const mapState = (state) => ({
  loginStatus: state.getIn(['loginReducer','login'])
})

//只有在传过来的DOM节点上 才能获取value值
const mapDispatch = (dispatch) => ({
  login(account,password) {
    dispatch(loginActionCreaters.login(account.value, password.value))
  }
})

export default connect(mapState,mapDispatch)(Login);
