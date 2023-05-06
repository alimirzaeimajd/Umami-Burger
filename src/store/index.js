import { createStore } from "redux";

const initialState = { counter: 0, show: true }

const createReducer = (state = initialState, action) => {
    if (action.type === 'increase') {
        return {
            counter: state.counter + 1,
            show: state.show
        }
    }
    if (action.type === 'decrease') {
        return {
            counter: state.counter - 1,
            show: state.show
        }
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            show: !state.show
        }
    }
    return state;
}

const store = createStore(createReducer);

export default store;