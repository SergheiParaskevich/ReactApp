import React from 'react'
import { useState } from 'react'
import Product from '../Product';

export default function ProductContainer() {

   const data = [
        {
            id: 1,
            title: 'велосипед',
            marks: [9, 8, 9, 7, 8]
        },
        {
            id: 2,
            title: 'ролики',
            marks: [5, 6, 6, 5, 4, 7]
        },
        {
            id: 3,
            title: 'сноуборд',
            marks: []
        },
      ]
    


// const [products, setProducts] = useState([data]);

  return (
    <div>
    
     {
        data.map(item => <Product key={item.id}{...item}/>)
     }
    
    </div>
  )
}
