import React, { useContext } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Input/Button'
import { Context } from '../../context'

export default function SearchForm() {

const { searchProduct, setSearchWord } = useContext(Context);

  const submit = (event) => {
    event.preventDefault()
    const { search } = event.target;
    setSearchWord(search.value);
   

  }

  return (
    <div>
        <form onSubmit={submit}>
            <Input placeholder="name" name="search" />
            <Button>Search</Button>
        </form>
    </div>
  )
}
