import React, { Component } from 'react';
import {LoginBox, LoginWrapper, Input, Button} from './style'
import * as actionCreate from './store/actionCreate'
import { connect } from 'react-redux'
class Login extends Component {
  state = {  }
  userName = React.createRef();
  passWord = React.createRef();
  render() { 
    return ( 
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName} />
          <Input placeholder="密码" type="password" ref={this.passWord}/>
          <Button onClick={()=>{
            console.log(this.userName.current.value);
            console.log('___')
            this.props.login();
          }}>登录</Button>
        </LoginBox>
      </LoginWrapper>
     );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login(){
      dispatch(actionCreate.changeLoginStatus(true));
    }
  }
}
 
export default connect(null, mapDispatchToProps)(Login);