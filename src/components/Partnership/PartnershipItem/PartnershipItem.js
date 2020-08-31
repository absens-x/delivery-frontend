import React from 'react'

import classes from './PartnershipItem.module.scss'





const PartnershipItem = ({classesList, reverseContent, preview, title, details}) => {
    return (<div className={`row-mg ${classes['partnership-item']} ${classesList} ${reverseContent === true ? classes.reverse : null}`}>
        <div className={classes.preview}><img src={preview}/></div>
        <div className={classes.info}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.details}>{ details }</p>
            <a className={classes.link} href="">Узнать больше</a>
        </div>
    </div>)
}


export default PartnershipItem