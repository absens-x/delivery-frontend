import React, { Component } from 'react'
import classes from './Button.module.scss'



export default props => {

        const cls = [
            classes.btn
        ]

        if(props.theme) {
            cls.push(classes['theme--' + props.theme])
        }

        if(props.size) {
            cls.push(classes['size--' + props.size])
        }

        if(props.disabled) {
            cls.push(classes.disabled)
        }
                    

        if(props.type) {
            cls.push(classes['btn-' + props.type])
        }

        if(props.addClasses) {
            cls.push(props.addClasses)
        }
                    

    
        return (
            <button className={ cls.join(' ') }>
                {props.children}
            </button>
        )
   
}