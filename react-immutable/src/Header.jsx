import React, { Component } from 'react';
import { is } from 'immutable';
class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
            return true;
        }
        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                return true;
            }
        }
        return false;
    }
    render() {
        window.c++;
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}

export default Header;