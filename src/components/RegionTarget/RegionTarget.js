import React from 'react'
import classes from './RegionTarget.module.scss'

import {ReactComponent as PlaceholderIcon} from '../../assets/img/placeholder1.svg'

const RegionTarget = (props) => {

    const onClick = (e) => {
        e.preventDefault()
    }

    return (<div className={classes.wrap}>
        <a className={classes.link} href="" onClick={onClick}>
            <i className={classes.icon}><PlaceholderIcon/></i>
            <span>Назрань</span>
        </a>
    </div>)
}


export default RegionTarget