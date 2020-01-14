import React, { Component } from 'react';
class AutoBind extends Component {
    render() {
        const {ctx,vmodel}=this.props
        return (
            <>
                {
                    React.cloneElement(this.props.children, { value:ctx.state[vmodel],onChange:(e)=>{
                        ctx.setState({
                            [vmodel]:e.target.value
                        })
                    }})
                }
            </>
        );
    }
}
export default AutoBind;