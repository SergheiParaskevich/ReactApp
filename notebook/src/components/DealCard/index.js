import React from 'react'
import style from '../DealCard/style.module.sass'

export default function DealCard({descr}) {
  return (
    <div className={style.card}>
        {descr}
    </div>
  )
}
