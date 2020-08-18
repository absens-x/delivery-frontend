import React, { Component } from 'react'
import classes from './Input.module.scss'

 

export default props => {
    
        const type = props.type || 'text'
        const placeholder = props.placeholder || ''

        const cls = [
            classes.input,
            props.disabled ? classes.disabled : null,
        ]

        return (
            <span className={ cls.join(' ') }>
                <input disabled={props.disabled ? true : false} type={type} placeholder={placeholder} />
                <p> Ошибка, неправильное значение</p>
            </span>
        )
}