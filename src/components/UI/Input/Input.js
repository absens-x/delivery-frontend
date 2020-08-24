import React from 'react'
import classes from './Input.module.scss'
import { ReactComponent as WarningIcon } from '../../../assets/img/warning.svg'
 
function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched 
}

export default props => {
    
        const type = props.type || 'text'
        const placeholder = props.placeholder || ''
        const htmlFor = `${type}_${Math.round((Math.random() * 1000))}`

        const cls = [
            classes.input,
        ]

        if(props.disabled) { cls.push(classes.disabled)}
        if(isInvalid(props)) { cls.push(classes.invalid)}

        return (
            <span className={ cls.join(' ') }>
                <label className={classes.label} htmlFor={`${htmlFor}`}> {props.label} </label>
                <input 
                    id={htmlFor}
                    disabled={props.disabled ? true : false}
                    type={type}
                    placeholder={placeholder} />

                    { isInvalid(props) ? <p className={classes['invalid-message']}> <i><WarningIcon /></i> Ошибка, неправильное значение</p> : null }
            </span>
        )
}