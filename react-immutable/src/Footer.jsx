import React, { Component } from 'react';
import BaseComponent from './BaseComponent';
class Footer extends BaseComponent {
    render() {
        window.c++;
        return (
            <div>
                {this.props.value.get('e')}
            </div>
        );
    }
}

export default Footer;