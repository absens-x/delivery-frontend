import React from 'react'
import classes from './RegionTarget.module.scss'

import {ReactComponent as PlaceholderIcon} from '../../assets/img/svg/placeholder1.svg'

const RegionTarget = (props) => {

    const onClick = (e) => {
        e.preventDefault()
    }

    return (<div className={classes.wrap}>
                <p>
                    <i className={classes.icon}><PlaceholderIcon/></i>
                    Доставка в 
                    <a className={classes.link} href="" onClick={onClick}>Назрань</a>
                </p>
            </div>)
}


export default RegionTarget