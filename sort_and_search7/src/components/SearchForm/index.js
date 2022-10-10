import React, { useContext } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Input/Button'
import { Context } from '../../context'
import style from '../SearchForm/style.module.sass'

export default function SearchForm() {

const { searchProduct } = useContext(Context);

  const submit = (event) => {
    event.preventDefault()
    const { search } = event.target;
    searchProduct(search.value);
   

  }

  return (
    <div className={style.container}>
        <form onSubmit={submit}>
            <Input placeholder="name" name="search" />
            <Button>Search</Button>
        </form>
    </div>
  )
}
