import React, { Component } from 'react'
import axios from './axios'
import { Pagination } from 'antd';
import { Spin } from 'antd';
import './App.css'
import { Link } from 'react-router-dom'

const perSize = 40;
const tabMap = {
  'ask': '精华',
  'job': '招聘',
  'share': '分享',
  'good': '精华',
  'all': '全部'
}
class Home extends Component {
  state = {
    current: 1,
    tab: 'all',
    limit: perSize,
    list: [],
    isLoading: false
  };
  componentDidMount() {
    this.handleRequestList();
  }
  handleRequestList = () => {
    this.setState({
      isLoading: true
    })
    const { tab, limit, current} = this.state;
    axios.get(`/topics?tab=${tab}&limit=${limit}&page=${current}`)
    .then(res => {
      console.log('res  ',res.data)
      this.setState({
        list: res.data
      })
      this.setState({
        isLoading: false
      })
    })
  };
  handleChangeTab = (key) => (e)=> {
    // setState 异步 当有多个setState需要执行时，会打包在一起去执行 transaction
    // Promise.all() 要么全部成功，要么全部失败
     this.setState({
       tab: key
     }, () => {
      this.handleRequestList();
     })
  }
  onChange = page => {
    this.setState({
      current: page
    }, () => {
      this.handleRequestList();
     })
  }
  render() {
    const { list, tab, isLoading } = this.state;
    return (
      <div>
        Home
        <ul>
          {Object.keys(tabMap).map((key, i) => {
            return (
              <li style={{
                color: tab === key ? 'red' : ''
              }} onClick={this.handleChangeTab(key)} key={`tab${i}`}>{tabMap[key]}</li>
            )
          })}
        </ul>
        <Spin spinning={isLoading}>
          {
            list.data && list.data.map((dis, i) => {
              return (
                <Link to={`/topic/${dis.id}`}  key={`dis${i}`}>
                <li key={`dis${i}`}>
                  <img src={dis.author.avatar_url} alt=""/>
                  <span>{dis.author.loginname}</span>
                  <h2>{dis.title}</h2>
                </li>
                </Link>
              )
            })
          }
        </Spin>
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </div>
    )
  }
}
export default Home