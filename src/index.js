// console.log('working')

import { createStore } from 'redux';

function counter(state = { amount: 100 }, action) {
    console.table(action)
    const newState = { ...state };
    if (action.type === 'INCREMENT') {
        newState.amount = state.amount + 1
    } else if (action.type === 'DECREMENT') {
        newState.amount = state.amount - 1
    } else {

    }
    return newState
}

const store = createStore(counter);

store.subscribe(() => {
    console.log(`The state is now`)
    console.table(store.getState())
})

store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'DECREMENT'
})























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
