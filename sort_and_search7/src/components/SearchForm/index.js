import React, { useContext } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Input/Button'
import { Context } from '../../context'
import style from '../SearchForm/style.module.sass'

export default function SearchForm() {

const { setSearchWord } = useContext(Context);

  const change = (event) => setSearchWord(event.target.value)
    
    
    
  

  return (
    <div className={style.container}>
        <form onChange={ change }>
            <Input placeholder="name" name="search" />
            
        </form>
    </div>
  )
}
