import React from 'react'
import ListContainer from '../../ListContainer'
import SearchForm from '../../SearchForm'
import style from '../ListProducts/style.module.sass'
export default function ListProducts () {
  return (
    <div className={style.container}>
        <SearchForm/>
        <ListContainer/>
    </div>
    
  )
}
