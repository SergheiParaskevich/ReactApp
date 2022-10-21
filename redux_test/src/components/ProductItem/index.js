import React from 'react'

export default function ProductItem({id, title, price, delete_product}) {
  return (
    <div onDoubleClick={() => delete_product(id)}>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  )
}
