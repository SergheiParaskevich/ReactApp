import React from 'react'
import style from '../DealCard/style.module.sass'
import Close from '../AddDeal/UI/Close'

export default function DealCard({id, descr, importance, deleteDeal}) {
  
  const importanceStyle = {backgroundColor: importance === '0' ? '#1ABC9C' : '#E74C3C'}

  return (
    <div  style={importanceStyle}  className={style.card}>
        {descr}
        <div className={style.close}   >
        <Close onClick={()=>deleteDeal(id)}/>
      </div>
    </div>
    
   
    
  )
}
