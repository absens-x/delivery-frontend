import React from 'react'
import classes from './SocialLinks.module.scss'


const SocialLinks = () => {
    return (<ul className={`row ${classes['links-list']}`}>
        <li className={classes['link-item']}><a href=""><i className="glyph-social_vk"></i></a></li>
        <li className={classes['link-item']}><a href=""><i className="glyph-social_ig"></i></a></li>
        <li className={classes['link-item']}><a href=""><i className="glyph-social_tg"></i></a></li>
    </ul>)
}


export default SocialLinks