import React from 'react';
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom'
import { Top, Tab, TabItem } from './style'
import routes from '../router/index'

function HomeLayout(props) {
  return (
    <div>
      <Top>
      <span
          className="iconfont menu"
          onClick={() => alert("用户中心正在开发中，敬请期待:)")}
        >
          &#xe65c;
        </span>
        <span className="title">云音悦</span>
        <span
          className="iconfont search"
          onClick={() => props.history.push("/search")}
        >
          &#xe62b;
        </span>

      </Top>
      <Tab>
        <NavLink activeClassName="selected" to="/recommend">
          <TabItem><span>推荐</span></TabItem>
        </NavLink>
        <NavLink activeClassName="selected" to="/singers">
          <TabItem><span>歌手</span></TabItem>
        </NavLink>
        <NavLink activeClassName="selected" to="/rank">
          <TabItem><span>排行榜</span></TabItem>
        </NavLink>
      </Tab>
      { renderRoutes(props.route.routes)}
    </div>
  )
}

export default HomeLayout;