import React, {Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(){
    // console.log(this.props.index)
    const {deleteList, index} = this.props
    deleteList(index)
  }
  render(){
    return(
      <li onClick={this.handleDelete}>
        {this.props.test}-{this.props.item}
      </li>
    )
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  item: PropTypes.string,
  deleteList: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem