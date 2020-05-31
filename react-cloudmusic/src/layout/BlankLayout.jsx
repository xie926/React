import React from 'react';
import { renderRoutes } from "react-router-config";

function BlankLayout({ route }) {
  console.log('全局')
  return (
    <>
      {/* 相当于router-view */}
      { renderRoutes(route.routes) }
    </>
  )
}

export default BlankLayout;