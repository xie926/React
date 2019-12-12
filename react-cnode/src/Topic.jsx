import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import withIsLoading from './withLoading'
// withXXX一般为高阶组件
class Topic extends Component {
  state = {
    content: ''
  }
  initLoading = () => {
    // 返回Promise
    const { id } = this.props.match.params;
    return axios.get('/topic/'+id)
    .then(res => {
      console.log('res:',res)
      this.setState({
        content: res.data.data.content
      })
      return Promise.resolve(true);
    })
    .catch(err => {
      return Promise.reject(false);
    })
  }
  componentDidMount() {
    // 要求
    // console.log('props ',this.props);
    // return axios.get('/topic/'+id)
    // .then(res => {
    //   console.log('res:',res)
    //   this.setState({
    //     content: res.data.data.content
    //   })
    // })
  }
  render() {
    const { content } = this.state;
    return (
      <div>
        Topic
        {/* { content } */}
        <div dangerouslySetInnerHTML={{
          __html: content
        }}></div>
      </div>
    )
  }
}
export default withRouter(withIsLoading(Topic));