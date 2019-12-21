import React, {Component} from 'react';
import Context from './Context'
const { Consumer } = Context 
class SubSon extends Component{
  render() {
    return(
      <Consumer>
        {
          (theme) => {
            return (
              <div style={{color:theme}}>SubSon</div>
            )
          }
        }
      </Consumer>
    )
  }
}
export default SubSon;