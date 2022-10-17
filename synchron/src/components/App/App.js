import { useState } from "react";
import UserContainer from "../UsersContainer";
import { Context } from "../../context";


function App() {
 
 

const data =  [{
  "id": 7,
  "email": "michael.lawson@reqres.in",
  "first_name": "Michael",
  "last_name": "Lawson",
  "avatar": "https://reqres.in/img/faces/7-image.jpg"
},
{
  "id": 8,
  "email": "lindsay.ferguson@reqres.in",
  "first_name": "Lindsay",
  "last_name": "Ferguson",
  "avatar": "https://reqres.in/img/faces/8-image.jpg"
},
{
  "id": 9,
  "email": "tobias.funke@reqres.in",
  "first_name": "Tobias",
  "last_name": "Funke",
  "avatar": "https://reqres.in/img/faces/9-image.jpg"
}];

const [users, setUsers] = useState(data);

console.log(users);

  return (
    <div className="App">
      <Context.Provider value={{users}}>
            <UserContainer/>
      </Context.Provider>
 
    </div>
  );
}

export default App;
