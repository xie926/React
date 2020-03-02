import React, {Component} from 'react'

class Test extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>{this.props.content}</div>
    )
  }
}

export default Test