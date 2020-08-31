import React from 'react'

import classes from './Partnership.module.scss'
import PartnershipItem from './PartnershipItem/PartnershipItem'


import previewImg1 from '../../assets/img/partnership_org.jpg'
import previewImg2 from '../../assets/img/partnership_courier.jpg'

const partnershipInfo =  [
    {
        preview: previewImg1,
        title: 'Стать партнером',
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lacus vulputate, feugiat justo at, laoreet velit. Etiam facilisis metus nec sodales pulvinar. Integer tristique ac lectus luctus maximus. Etiam volutpat elementum sapien quis rutrum. Sed fringilla ut velit vel commodo.",
        reverseContent: false,
    },
    {
        preview: previewImg2,
        title: 'Стать курьером',
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lacus vulputate, feugiat justo at, laoreet velit. Etiam facilisis metus nec sodales pulvinar. Integer tristique ac lectus luctus maximus. Etiam volutpat elementum sapien quis rutrum. Sed fringilla ut velit vel commodo.",
        reverseContent: true,
    },
]


const Partnership = () => {
    return (<div className={`${classes.partnership}`}>
        <div className={classes.wrap}>
            <div className="container">
                <PartnershipItem {...partnershipInfo[0]}/>
                <hr className={classes['del-line']}/>
                <PartnershipItem {...partnershipInfo[1]} />
            </div>  
        </div>
    </div>)
}


export default Partnership