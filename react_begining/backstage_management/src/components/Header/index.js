import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
import {Link} from 'react-router-dom'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: sessionStorage.getItem('username')
    }
  }
  // UNSAFE_componentWillMount() {
  //   this.setState({
  //     userName: '谢妍'
  //   })
  // }
  componentDidMount() {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }

  getWeatherAPIData = () => {
    axios.jsonp({
      url: 'https://www.tianqiapi.com/free/day?appid=58338557&appsecret=8G7VYGII'
    }).then((res) => {
      if (res) {
        let data = res
        this.setState({
          dayPictureUrl: data.wea_img,
          weather: data.wea
        })
      }
    })
  }
  render() {
    return (
      <>
        <div className="header">
          <Row className="header-top">
            <Col span={24}>
              <span>欢迎，{this.state.userName}</span>
              <Link to="/login">退出</Link>
            </Col>
          </Row>
          <Row className="breadcrumb">
            <Col span={4} className="breadcrumb-title">
              首页
            </Col>
            <Col span={20} className="weather">
              <span className="date">{this.state.sysTime}</span>
              <span className="weather-img">
                <img src={this.state.dayPictureUrl} alt="" />
              </span>
              <span className="weather-detail">
                {this.state.weather}
              </span>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Header