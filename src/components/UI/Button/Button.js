import React, { Component } from 'react'


import classes from './Button.module.scss'

export default class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const cls = [
            classes.btn,
        ]
        return (
            <button className={ cls.join(' ') }>
                {this.props.children}
            </button>
        )
    }
}