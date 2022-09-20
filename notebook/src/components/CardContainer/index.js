import React from 'react'
import WeekdayCard from '../WeekDay';
import style from '../CardContainer/style.module.sass'

export default function CardContainer({deals}) {
 const result = [
  {
    day_num: '1',
    deals: []
  },
  {
    day_num: '2',
    deals: []
  }
 ];

 deals.forEach(deal => {
  const cur_days = result.map(day => day.day_num);
  if (cur_days.includes(deal.day)){
    const day = result.find(day => day.day_num === deal.day);
    day.deals.push(deal)
  }else{
    result.push({
      day_num: deal.day,
      deals: [deal]
    })
  }
});


  


  return (
    <div className={style.container}>
        {
          result.map(day => <WeekdayCard key={day.day_num} label={day.day_num} deals={day.deals}/>)
        }
        
    </div>
  )
}
