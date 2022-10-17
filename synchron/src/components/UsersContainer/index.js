import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context';

export default function UserContainer() {

const { users } = useContext(Context);

console.log(Context);

  return (
    <div>
        {
            users.map(({id, first_name}) => <p key={id}>{first_name}</p>)
        }
    </div>
  )
}



