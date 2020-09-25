import React, { Component } from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less'
import {NavLink} from 'react-router-dom'

const { SubMenu } = Menu;
class NavLeft extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuTreeNode: this.renderMenu(MenuConfig)
    }
  }

  // UNSAFE_componentWillMount() {
  //   const menuTreeNode = this.renderMenu(MenuConfig)
  //   this.setState({
  //     menuTreeNode
  //   })
  // }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }

  render() {
    return (
      <>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>后台管理系统</h1>
        </div>
        <div>
          <Menu mode="vertical" theme="dark">
            {this.state.menuTreeNode}
          </Menu>
        </div>
      </>
    )
  }
}

export default NavLeft