import React, { useContext } from 'react'
import style from '../AddForm/style.module.sass'
import Input from '../../../UI/Input';
import Button from '../../../UI/Input/Button';
import { Context } from '../../../context';

export default function AddForm() {

const { addProduct } = useContext(Context);

const submit = event => {
    event.preventDefault();
    const {title, price, sale} = event.target;
    addProduct(title.value, price.value, sale.value);
    title.value = " ";
    price.value = " ";
    sale.value = " ";
}

  return (
   <form className={style.container} onSubmit={submit}>
    <Input placeholder='name' name='title' />
    <Input placeholder='price' name='price'/>
    <Input  placeholder='rate sale' name='sale' />
    <Button>Add</Button>
   </form>
    
  )
}
