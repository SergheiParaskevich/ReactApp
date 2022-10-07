import React, { useContext } from 'react'
import ListItem from '../LisItem/idex'
import { Context } from '../../context'
import style from '../ListContainer/style.module.sass'

export default function ListContainer() {
    const { showProducts } = useContext(Context)
  return (
    <div className={style.containerstyle}>
        {
            showProducts.map(product => <ListItem key={product.id} {...product}/>)
            
        }
        
    </div>
  )
}
