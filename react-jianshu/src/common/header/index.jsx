import React, { Component } from 'react';
import { HeaderWrapper, Nav, NavItem, Addition, Logo, Button, SearchWrapper, NavSearch} from './style'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreate'
import { connect } from 'react-redux';
class Header extends Component {
  render() { 
    const { focus } = this.props
    return ( 
      <HeaderWrapper>
				<Link to='/'>
					<Logo/>
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>

					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focus} classNames='slide' >
              <NavSearch onFocus={() =>{
                this.props.handFocus(true)
              }}
              onBlur={() =>{
                this.props.handFocus(false)
              }}
              >

              </NavSearch>
            </CSSTransition>
          </SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
							<i className="iconfont">&#xe615;</i>
							写文章
						</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>

     );
  }
}
const mapStateToProp = (state) => {
  return {
    focus: state.getIn(['header', 'focus'])
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    handFocus(focus) {
      dispatch(actionCreators.searchFocus(focus))
    }
  }
}
export default connect(mapStateToProp, mapDispatchToProps)(Header);