import React from 'react'

export default function AddTeamForm() {
  return (
    <div>
       <form>
        <p>Add team</p>
        <input type='text' placeholder="Team's name" name='title'></input>
        <button>Add</button>
       </form>
    </div>
  )
}
