import { createStore } from 'redux';
const reducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return state.counter + 1
    }
    if (action.type === 'decrement') {
        return state.counter - 1
    }
    return state;
}

const store = createStore(reducer);
export default store;