import React from 'react'
import DealCard from '../DealCard'
import WeekdayCard from '../WeekDay';
import style from '../CardContainer/style.module.sass'

export default function CardContainer({deals}) {
  console.log(deals);
  return (
    <div className={style.container}>
        <WeekdayCard label={'Monday'} deals={deals}/>
    </div>
  )
}
