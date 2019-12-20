import { Route, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fromJS } from 'immutable';
class PrivateRoute extends Component {
  state = {  }
  render() { 
    const { login,children, Com, ...restProps } = this.props
    return ( 
      // <>
      //   {
      //     login? <Route {...restProps} />: <Redirect to="/" />
      //   }
      // </>
      <Route {...restProps} render={() =>{
        if (login){
          return children
        } else {
          return <Redirect to="/" />
        }
      }} />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.getIn(['login', 'login'])
  }
}
 
export default connect(mapStateToProps, null)(PrivateRoute);