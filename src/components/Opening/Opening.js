import React from 'react';
import classes from './Opening.module.scss'


import SearchInput from '../UI/SearchInput/SearchInput'


const Opening = (props) => {


    
    return(<div className='opening'>
        <div className={classes.wrap}>
          
                <div className={classes.inner}>
                    <div className={`container ${classes.content}`}>
                        <div className={classes["search-region"]}>
                            <h1 className={classes.title}>Сервис доставки еды <br/>в Ингушетии</h1>
                            <SearchInput/>
                        </div>
                    </div>
                </div>
          
        </div>
    </div>)
}


export default Opening