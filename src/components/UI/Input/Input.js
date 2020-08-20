import React, { Component } from 'react'
import classes from './Input.module.scss'
import WarningIcon from '../../../assets/img/warning.svg'
 

export default props => {
    
        const type = props.type || 'text'
        const placeholder = props.placeholder || ''

        const cls = [
            classes.input,
            props.disabled ? classes.disabled : null,
            classes.invalid,
        ]

        return (
            <span className={ cls.join(' ') }>
                <input disabled={props.disabled ? true : false} type={type} placeholder={placeholder} />
                { true ? <p className={classes['input__invalid-message']}> <WarningIcon /> Ошибка, неправильное значение</p> : null} 
            </span>
        )
}