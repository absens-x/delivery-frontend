import React from 'react'
import classes from './Header.module.scss'

import {ReactComponent as CartIcon} from '../../assets/img/cart.svg'
import {ReactComponent as HamburgerIcon} from '../../assets/img/hamburger.svg'
import {ReactComponent as Logo} from '../../assets/img/logo.svg'

import RegionTarget from '../RegionTarget/RegionTarget'
import Button from '../UI/Button/Button'


const Header = (props) => {
    
    const cls = [
        classes.header,
        classes['header__wrap'],
    ]
    
    return(<header className={cls.join(' ')}>
                <div className={ 'row-mg ' + classes['wrap']}>

                    <div className={`row-mg ${classes.toleft}`}>
                        <Button type='hamburger'><i><HamburgerIcon/></i></Button>
                        <RegionTarget/>
                    </div>
                    
                    <a className={classes.logo} href=""><Logo/></a>

                    <div className={classes.toright}>
                        <Button type='cart' addClasses={classes['header__btn-cart']}>
                            <i><CartIcon/></i>
                            <span>0</span>
                        </Button>

                        <Button theme='dark-border'>Вход</Button>
                    </div>
                </div>
    </header>)
}

export default Header