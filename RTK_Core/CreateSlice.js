"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var redux_logger_1 = require("redux-logger");
// initial state 
var initialState = { value: 0 };
// counter slice 
var counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: function (state) {
            state.value++;
        },
        decrement: function (state) {
            state.value--;
        },
        resetCounter: function (state) {
            state.value = 0;
        },
        increment_by: function (state, action) {
            state.value += action.payload;
        }
    }
});
// generate actions 
var _a = counterSlice.actions, increment = _a.increment, decrement = _a.decrement, resetCounter = _a.resetCounter, increment_by = _a.increment_by;
// generate reducer 
var counterReducer = counterSlice.reducer;
// configureStore 
var store = (0, toolkit_1.configureStore)({
    reducer: counterReducer,
    middleware: function (getMiddleware) { return getMiddleware().concat(redux_logger_1.logger); },
    devTools: process.env.NODE_ENV !== 'production'
});
// dispatching increment 
store.dispatch(increment());
// dispatching incremebt by 20 
store.dispatch(increment_by(20));
//logging state 
console.log(store.getState());
