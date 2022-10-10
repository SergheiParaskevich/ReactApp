import React from 'react'
import style from '../LisItem/style.module.sass'


export default function ListItem({title, price, sale}) {
  return (
    <div className={style.itemstyle}>
        <p>{title}</p>
        <div>
          {
            sale === '' ? <p>{price}</p> :  
            <>  <p style={{color: 'gray', textDecoration: 'line-through'}} >{price}</p> 
                <p style={{color: '#FFA3A3'}}>{price - price * sale/100}</p> 
            </>
          }
            
        </div>

    </div>
  )
}
