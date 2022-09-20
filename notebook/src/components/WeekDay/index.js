import React from 'react'
import style from '../WeekDay/style.module.sass'
import DealCard from '../DealCard'
import Close from '../AddDeal/UI/Close'

export default function WeekdayCard({label, deals}) {
  return (
    <div className={style.container}>
        <div className={style.label}>
            {label}
        </div>
        <div className={style.deals}>
        {
            deals.map(deal => <DealCard key={deal.id} {...deal}/>)
        }
        </div>
      <div className={style.close}>
        <Close />
      </div>

    </div>
  )
}
