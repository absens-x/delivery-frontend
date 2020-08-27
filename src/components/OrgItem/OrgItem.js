import React from 'react'
import classes from './OrgItem.module.scss'

import orgPreview from '../../assets/img/org_preview_bg.jpg'

const OrgItem = ({className}) => {
    return (<div className={`${classes.item} ${className}`}>
        <div className={classes.wrap}>
            <a href="">
                <div style={{backgroundImage: `url(${orgPreview})`} } className={classes.preview}></div>
                <div className={classes.info}>
                    <div className={`row-mg ${classes['info__top']}`}>
                        <p className={classes.name}>Тануки</p>
                        <span className={classes.rate}><i className="glyph-rate_star"></i>4.5</span>
                    </div>
                    <p className={classes['info__title']}>Откроется в: <span>10:00</span></p>
                    <p className={classes['info__title']}>Время и расстояние: <span>~ 24 мин, 3 км</span></p>
                    <hr/>
                    <div className={classes['info__bottom']}>
                        <p className={classes.cuisines}><span>Кухня: </span>китайская, русская, кавказская...</p>
                    </div>
                </div>
            </a>
        </div>
    </div>)
}


export default OrgItem