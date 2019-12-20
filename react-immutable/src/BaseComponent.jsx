import React, { Component } from 'react';
import { is } from 'immutable';
class BaseCom extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
            return true;
        }
        // { a: 1,b:2} {a:2,b:2,c:3}
        //css in js
        //BEM
        // stylus sm-2 sm-4
        // css-module .text -> .text-asasfsa
        // css in js 样式定义组件 css 变量和 js 变量共享
        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                return true;
            }
        }
        return false;
    }
}
export default BaseCom;