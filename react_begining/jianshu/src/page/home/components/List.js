import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import{Link} from 'react-router-dom'

class List extends PureComponent {
  render() {
    let { list, getMoreList, page } = this.props
    return (
      <>
        {
          list.map((item, index) => (
            <Link key={index} to={'/details/' + item.get('id')}>
              <ListItem >
                <img alt='' className='pic' src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List);