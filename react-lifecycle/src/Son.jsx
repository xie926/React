import React, {Component} from 'react';
import SubSon from './SubSon'
import Context from './Context';
const { Provider } = Context
class Son extends Component{
  state = {
    theme: 'red'
  }
  render() {
    return(
        <SubSon />
    )
  }
}
export default Son;