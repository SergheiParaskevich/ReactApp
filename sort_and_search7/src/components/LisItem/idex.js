import React from 'react'
import style from '../LisItem/style.module.sass'


export default function ListItem({title, price, sale}) {
  return (
    <div className={style.itemstyle}>
        <p>{title}</p>
        <div>
            <p>{price}</p>
            <p>{sale}</p>
        </div>

    </div>
  )
}
