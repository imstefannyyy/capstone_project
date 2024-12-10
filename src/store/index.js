import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {
    countries: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return { countries: action.countries };
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
