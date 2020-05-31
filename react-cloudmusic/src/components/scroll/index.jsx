import React, { useEffect, useRef } from 'react';
import BScroll from 'better-scroll'
import styled from 'styled-components'
import { Content } from './style'

const ScrollContainer = styled.div`
width: 100%;
height: 100%;
overflow: hidden;`

export default function(props) {
  const scrollContainerRef = useRef()
  // useEffect 模拟类组件的三个生命周期 didMount didUpdate unMount
  useEffect(() => {
    const scroll = new BScroll(
      scrollContainerRef.current,
      {
        
      }
    )
  })
  return (
    <Content>
      <ScrollContainer ref={scrollContainerRef}>
        {props.children}
      </ScrollContainer>
    </Content>
  )
}