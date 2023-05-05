import { createStoreHook } from "react-redux";

const createReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return state.counter + 1;
        case 'decrement':
            return state.counter - 1;
        default:
            return state;
    }
}

const store = createStoreHook(createReducer);

export default store;