import { createStore } from "redux";
import { countReducer } from './reducer/countReducer'



export const store = createStore(countReducer);