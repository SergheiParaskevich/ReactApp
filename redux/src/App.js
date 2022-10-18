import { useDispatch, useSelector } from "react-redux";
import { resetAction , incrementAction, decrementAction, AddAction} from "./store/reducer/countReducer";



function App() {

 
  

const dispatch = useDispatch();
const value = useSelector(state => state);

const increment = () => dispatch (incrementAction());
const decrement = () => dispatch (decrementAction());
const reset = () => dispatch (resetAction())

const  submit = event =>
 { event.preventDefault();
  const {value} = event.target;
 dispatch(AddAction(+value.value))
  value.value = '';}

  return (
    <div >
     <p>{value}</p>
     <div>
      <button onClick={increment} >+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
     </div>
     <form onSubmit={submit}>
      <input type='text' name='value'/>
      <button>Add</button>
     </form>
    </div>
  );
}

export default App;
