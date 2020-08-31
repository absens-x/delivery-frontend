import React from 'react'
import classes from './Footer.module.scss'

const Footer = () => {
    return (<footer className={classes.footer}>
        <div className={classes.wrap}>
            <div className={classes.top}></div>
            <div className={classes.bottom}></div>
        </div>
    </footer>)
}

export default Footer