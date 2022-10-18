

const defaultState = 0;

const increment = 'incr';

const decrement = 'decr';

const reset = 'reset';

const Add = 'Add';


export const incrementAction = () => ({type: increment});
export const decrementAction = () => ({type: decrement});
export const resetAction = () => ({type: reset});
export const AddAction = (payload) => ({type: Add, payload})

export const countReducer = (state = defaultState, action) => {
    if (action.type === increment){
        return state +1
    }else if(action.type === decrement){
        return state -1
    }else if (action.type === reset){
        return 0
    }else if (action.type === Add){
        return state + action.payload
    }else{
        return state
    }
        
    }
