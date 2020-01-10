// 自动构建路由
import React from 'react'
// 组件 每个路由 独立的url head
import Head from 'next/head'
import {Button} from 'antd';
import Header from '../components/Header';
const Home = () => (
  <>
  <Head>
    <title>Home</title>
  </Head>
  <Header />
  <div>
    <Button>我是按钮</Button>
  </div>
  </>
)
export default Home