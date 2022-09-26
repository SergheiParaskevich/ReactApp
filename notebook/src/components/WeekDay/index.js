import React from 'react'
import style from '../WeekDay/style.module.sass'
import DealCard from '../DealCard'
import Close from '../AddDeal/UI/Close'
import { week_label } from './weekLabels'

export default function WeekdayCard({label, deals, deleteDeal, deleteWeekDay}) {
  return (
    <div className={style.container}>
        <div className={style.label}>
            {week_label[label]}
        </div>
        <div className={style.deals}>
        {
            deals.map(deal => <DealCard key={deal.id} {...deal} deleteDeal={deleteDeal} />)
        }
        </div>
      <div className={style.close}>
        <Close  onClick={()=>deleteWeekDay(label)} />
      </div>

    </div>
  )
}
