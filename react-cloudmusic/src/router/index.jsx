import React from 'react';
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layout/BlankLayout'
import HomeLayout from "../layout/HomeLayout"
import RecommendComponent from '../application/recommend/index'
import RankComponent from '../application/rank/index'
import SingersComponent from '../application/singers/index'

export default [{
  // 每访问一个路由都要经过这里
  component: BlankLayout,
  routes: [
    {
      path: '/',
      component: HomeLayout,
      routes: [
        {
          path: '/',
          exact: true,
          render: () => <Redirect to="/recommend" />   // 重定向
        },
        {
          path: '/recommend',
          component: RecommendComponent,
        },
        {
          path: '/singers',
          component: SingersComponent,
        },
        {
          path: '/rank',
          component: RankComponent,
        }
      ]
    }
  ]
}]