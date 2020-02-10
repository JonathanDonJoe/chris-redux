// console.log('working')

import { createStore } from 'redux';

function counter(state = { amount: 100 }, action) {
    console.table(action)
    const newState = { ...state };
    if (action.type === 'INCREMENT') {
        newState.amount = state.amount + action.amount
    } else if (action.type === 'DECREMENT') {
        newState.amount = state.amount - action.amount
    } else {

    }
    return newState
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const store = createStore(counter);

store.subscribe(() => {
    console.log(`The state is now`)
    console.table(store.getState())
})

function actionIncrement(amt) {
    return {
        type: INCREMENT,
        amount: amt
    }
}
function actionDecrement(amt) {
    return {
        type: DECREMENT,
        amount: amt
    }
}

store.dispatch(actionIncrement(3))
store.dispatch(actionDecrement(20))
store.dispatch(actionIncrement(12))










// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
