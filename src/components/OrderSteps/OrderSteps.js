import React from 'react'
import classes from './OrderSteps.module.scss'
import OrderStepItem from './OrderStepItem/OrderStepItem'


import {ReactComponent as StepIcon1} from '../../assets/img/svg/how_to_order_icon_1.svg'
import {ReactComponent as StepIcon2} from '../../assets/img/svg/how_to_order_icon_2.svg'
import {ReactComponent as StepIcon3} from '../../assets/img/svg/how_to_order_icon_3.svg'

const stepsInfo = [
    {
        icon: <StepIcon1/>,
        title: 'Укажите город',
        details : 'И мы найдем для вас доступные рестораны или магазины в вашем городе'
    },
    {
        icon: <StepIcon2/>,
        title: 'Выберите ресторан',
        details : 'Изучите его меню и начните наполнять корзину вашими любимыми блюдами'
    },
    {
        icon: <StepIcon3/>,
        title: 'Оформите заказ',
        details : 'Готовы? Осталось потвердить заказ и мы доставим вам его в кратчайшие сроки'
    },
]

const OrderSteps = () => {
    return(<div className={classes['order-steps']}>
        <div className={classes.wrap}>
            <div className="container">
                <h1 className={classes.title}>Как заказать</h1>
                <div className={`row`}>
                    {
                        stepsInfo.map((item, i) => {
                            return <OrderStepItem {...item} key={i} classesList={classes['list-item']}/>
                        })
                    }
                    
                     
                </div>               
            </div>
        </div>
    </div>)
}

export default OrderSteps