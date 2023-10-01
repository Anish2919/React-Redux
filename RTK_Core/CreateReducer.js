const { createAction, nanoid, createReducer, configureStore } = require('@reduxjs/toolkit');  
const { logger } = require('redux-logger'); 

const initialState = {
    counter: 0
} 

const increment = createAction('INCREMENT'); 
const decrement = createAction('DECREMENT'); 
const resetCounter = createAction('RESET'); 

// custom create action 
const increment_by = createAction('INCREMENT_BY', (amount, user) => {
    return {
        payload: {
            amount, 
        }
    }
})

// function 
function isActionWithNumberPayload(action) {
    return typeof action.payload === 'number'
}

// create Reducer 
const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, function(state) {
            state.counter += 1; 
        })
        .addCase(decrement, (state) => {
            state.counter -= 1; 
        }) 
        .addCase(resetCounter, (state) => {
            state.counter = 0; 
        })
        .addCase(increment_by, (state, action) => {
            state.counter += action.payload.amount; 
        })
        .addMatcher(isActionWithNumberPayload, (state, action) => {}) 
        .addDefaultCase((state, action) => {})

})

// create store 
const store = configureStore({
    reducer: counterReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
}) 

store.dispatch(increment()); 
store.dispatch(increment_by(20, 'Anish')); 


console.log(store.getState()); 

