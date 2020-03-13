import React,{Component} from 'react'
import {DetailWrapper, Header, Content} from './style'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Detail extends Component{
  render(){
    console.log()
    return(
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
          
        </Content>
      </DetailWrapper>
    )
  }

  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id){
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));