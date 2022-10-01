import React from 'react'
import WeekdayCard from '../WeekDay';
import style from '../CardContainer/style.module.sass'
import EmptyDeals from '../emptyDeals';


export default function CardContainer({deals }) {

  const result = [];
 console.log(result);
 
  deals.forEach(deal => {
  const day = result.find(day => day.day_num === deal.day);
  
  if (day !== undefined){
    day.deals.push(deal);
  }else{
    result.push({
     day_num:deal.day,
     deals: [deal]
    })
  }
    });
  
result.sort((a, b)=> +a.day_num - +b.day_num);


  return (
    <div className={style.container}>
     {
      result.length === 0 ? <EmptyDeals/> :    
        result.map(day => 
        <WeekdayCard 
        key={day.day_num} 
        label={day.day_num} 
        deals={day.deals}
        
        />)
      }
     
        
    </div>
  )
}
