import React, { useContext } from 'react'
import style from '../DealCard/style.module.sass'
import Close from '../AddDeal/UI/Close'
import { Context } from '../../context'

export default function DealCard({id, descr, importance }) {

  const { deleteDeal } = useContext(Context);
  
  
  const importanceStyle = {backgroundColor: importance === '0' ? '#1ABC9C' : '#E74C3C'}

  return (
    <div  style={importanceStyle}  className={style.card}>
        {descr}
        <div className={style.close}>
        <Close onClick={()=>deleteDeal(id)}/>
      </div>
    </div>
    
   
    
  )
}
