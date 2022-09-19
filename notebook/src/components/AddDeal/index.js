import React from 'react'
import Select from 'react-select'
import style from '../AddDeal/style.module.sass'
import Button from './UI/Button';

export default function AddDeal ({addNewDeals}) {

    const day_options = [
        { value: 1, label: 'Mon'},
        { value: 2, label: 'Tue'},
        { value: 3, label: 'Wed'},
        { value: 4, label: 'Thu'},
        { value: 5, label: 'Fri'},
        { value: 6, label: 'Sat'},
        { value: 7, label: 'Sun'},
    ];

    const importance_options = [
        { value: 0, label: 'Important'},
        { value: 1, label: 'Not important'}
    ];

    const submit = event => {
    event.preventDefault();
    const{day, importance, descr} = event.target;
   addNewDeals(descr.value, importance.value, day.value);
    
    
    
        }   


  return (
        <form className={style.container} onSubmit={submit}>
          <div className={style.input_container}>
            <Select name='day' options={day_options}/>
            <Select name='importance' options={importance_options}/>
            <input placeholder='Description' className={style.descr} type="text" name='descr'/>
            <Button>AddDeal</Button>
          </div>
        </form>
        )
}
