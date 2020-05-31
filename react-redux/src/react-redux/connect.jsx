import React from 'react';
import { Consumer } from './index'

export default (mapStateToProps, mapDispatchToProps) => (Wrap) => {
  // 获取state  dispatch
  class Connected extends React.Component {
    render() {
      return (
        <Consumer>
          {(store) => {
            const state = store.getState()
            const dispatch = store.dispatch
            const stateToProps = mapStateToProps(state)
            const dispatchToProps = mapDispatchToProps(dispatch)
            // 放到props上
            return (
              <Wrap {...stateToProps} {...dispatchToProps}></Wrap>
            )
          }}
        </Consumer>
      )
    }
  }
  return Connected
}