import React, { Component } from 'react'
import { Form, Input, Button, Card, message, Icon } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './index.less'
import Bgc from './bgc';
import axios from 'axios';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      username: '',
      password: '',
      inputname: '',
      inputpwd: ''
    }
  }

  componentDidMount() {
    axios.get('/api/user.json').then((res) => {
      console.log(res.data.data.person[0])
      this.setState({
        username: res.data.data.person[0].username,
        password: res.data.data.person[0].password
      })
    })
    sessionStorage.setItem('username', '2201703940')
  }
  getusername = (e) => {
    this.setState({
      inputname: e.target.value
    })
  }
  getpwd = (e) => {
    this.setState({
      inputpwd: e.target.value
    })
  }
  // handleSubmit = (e) => {
  //   console.log(e.target)
  //   console.log(this.state.username, this.state.password)
  //   if (this.state.inputname === this.state.username && this.state.inputpwd === this.state.password) {
  //     sessionStorage.setItem('username', this.state.inputname)
  //     this.props.history.push('/#/home')
  //   } else {
  //     message.error('用户名和密码不匹配');
  //   }
  // };
  handleSubmit = (e) => {
    //提交之前判断输入的字段是否有错误
    // e.preventDefault();
      let history = this.props.history;
      this.props.form.validateFields((errors, values) => {
        if (!errors) {
          console.log('Received values of form: ', values);
            history.push('/#/home');
          }
      })
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <div className="login">
        <Bgc />
        <Card className="login-form" style={{ width: 300, borderRadius: 4 }}>
          <Form>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" onChange={this.getusername} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Password" onChange={this.getpwd} />
            </Form.Item>
            <Form.Item>
              <Link to="/home">
                <Button type="primary" htmlType="submit" className="login-form-button" block onClick={this.handleSubmit}>
                  Log in
              </Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

const LoginForm = Form.create({})(Login);

export default LoginForm