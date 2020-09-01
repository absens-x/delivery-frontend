import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./slick.custom.theme.scss"
import classes from './DashCatalog.module.scss'

import dashCatalogPreview from '../../assets/img/dash_catalog_preview.png'


 


const settings = {
    autoplay: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    infinite: false,
 
   
    responsive: [
        {
            breakpoint: 558,
            settings: {
              slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 7,
            }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 8,
            }
        }
    ]
}

 
const catalog = [
    {
        icon: dashCatalogPreview,
        name: "Бургеры"
    },
    {
        icon: dashCatalogPreview,
        name: "Шаурма"
    },
    {
        icon: dashCatalogPreview,
        name: "Суши"
    },
    {
        icon: dashCatalogPreview,
        name: "Пицца"
    },
    {
        icon: dashCatalogPreview,
        name: "Супы"
    },
    {
        icon: dashCatalogPreview,
        name: "Десерты"
    },
    {
        icon: dashCatalogPreview,
        name: "Грузинская"
    },
    {
        icon: dashCatalogPreview,
        name: "Русская"
    },
    {
        icon: dashCatalogPreview,
        name: "Кавказская"
    },
    {
        icon: dashCatalogPreview,
        name: "Узбекская"
    },
    {
        icon: dashCatalogPreview,
        name: "Китайская"
    },
    {
        icon: dashCatalogPreview,
        name: "Шашлыки"
    },
    {
        icon: dashCatalogPreview,
        name: "Выпечка"
    },
   
]


const DashCatalog = () => {
    return (<div className={`container ${classes.catalog}`}>
        <ul className={classes['catalog-list']}>
            <Slider {...settings}>
                {
                    catalog.map((item, i) => 
                        <li key={i} className={classes['catalog-item']}>
                            <a href="" className={classes['catalog-item__link']}>
                                <img className={classes['catalog-item__preview']} src={item.icon}/>
                                <span className={classes['catalog-item__name']} >{item.name}</span>
                            </a>
                        </li>
                    )
                }
            </Slider>
        </ul>
    </div>) 
}

export default DashCatalog