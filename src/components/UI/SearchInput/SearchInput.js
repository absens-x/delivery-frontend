import React from 'react'
import classes from './SearchInput.module.scss'


import Input from '../Input/Input'
import Button from '../Button/Button'

const cls = [
    classes['search-input'],
]

const SearchInput = (props) => {

    if(props.classesList) {
        cls.push(props.classesList)
    }
    
    return (<div className={cls.join(' ')}>
        <Input classesList={classes.input} placeholder="Введите ваш адрес..."/>
        <Button classesList={classes.btn}>Искать</Button>
        <div className={classes['places-list']}>
            <ul>
                <li className={classes['places-list__item']}>ул Муталиева 25, Назрань, Россия</li>
                <li className={classes['places-list__item']}>ул Муталиева 25, Назрань, Россия</li>
                <li className={classes['places-list__item']}>ул Муталиева 25, Назрань, Россия</li>
                <li className={classes['places-list__item']}>ул Муталиева 25, Назрань, Россия</li>
            </ul>
        </div>
    </div>)
}

export default SearchInput