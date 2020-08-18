import React, { Component } from 'react'
import classes from './Button.module.scss'



export default props => {

        const cls = [
            classes.btn,
            props.disabled ? classes.disabled : null,
            props.size === 'sm' ? classes['btn--size--sm'] : null,
            props.theme === 'red-border' ? classes['btn--theme--red-border'] : null,
            props.theme === 'dark' ? classes['btn--theme--dark'] : null,
            props.theme === 'dark-border' ? classes['btn--theme--dark-border'] : null,
        ]

        return (
            <button className={ cls.join(' ') }>
                {props.children}
            </button>
        )
   
}