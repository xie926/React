import React, {Component} from 'react'

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(){
    // console.log(this.props.index)
    this.props.deleteList(this.props.index)
  }
  render(){
    return(
      <li onClick={this.handleDelete}>
        {this.props.item}
      </li>
    )
  }
}

export default TodoItem