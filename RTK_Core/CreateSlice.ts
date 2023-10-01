import { configureStore, createSlice } from "@reduxjs/toolkit"; 
import type { PayloadAction } from "@reduxjs/toolkit"; 
import { logger } from 'redux-logger'; 

// counter slice interface 
interface CounterSlice {
    value: number, 
} 

// initial state 
const initialState: CounterSlice = {value: 0} ; 


// counter slice 
const counterSlice = createSlice({
    name:'counter', 
    initialState, 
    reducers: {
        increment(state) {
            state.value ++; 
        }, 
        decrement(state) {
            state.value --; 
        }, 
        resetCounter(state){
            state.value = 0; 
        }, 
        increment_by(state, action: PayloadAction<number>){
            state.value += action.payload; 
        }
    }
}) 


// generate actions 
const { increment, decrement, resetCounter, increment_by } = counterSlice.actions;  

// generate reducer 
const counterReducer = counterSlice.reducer; 


// configureStore 
const store = configureStore({
    reducer: counterReducer, 
    middleware: (getMiddleware) => getMiddleware().concat(logger), 
    devTools: process.env.NODE_ENV !== 'production'
})

// dispatching increment 
store.dispatch(increment()); 

// dispatching incremebt by 20 
store.dispatch(increment_by(20)); 

//logging state 
console.log(store.getState()); 